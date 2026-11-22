create schema if not exists girafinha_internal;
revoke all on schema girafinha_internal from public, anon, authenticated;
create table girafinha_internal.alert_outbox (
  lead_id bigint primary key references public.reservation_leads(id) on delete cascade,
  state text not null default 'pending' check(state in ('pending','sending','sent')),
  request_id bigint,
  attempts integer not null default 0,
  next_attempt timestamptz not null default now(),
  last_attempt timestamptz,
  sent_at timestamptz,
  last_status integer
);
revoke all on all tables in schema girafinha_internal from public, anon, authenticated;
create function girafinha_internal.queue_new_reservation() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  begin
    insert into girafinha_internal.alert_outbox(lead_id) values(new.id);
  exception when others then
    raise warning 'Website alert queue failed for reservation id %', new.id;
  end;
  return new;
end $$;
revoke all on function girafinha_internal.queue_new_reservation() from public, anon, authenticated;
create trigger girafinha_queue_reservation_alert after insert on public.reservation_leads
for each row execute function girafinha_internal.queue_new_reservation();
create function girafinha_internal.process_alerts() returns void
language plpgsql security definer set search_path = '' as $$
declare item record; request_number bigint; token text;
begin
  if not pg_catalog.pg_try_advisory_xact_lock(2026112201) then return; end if;
  update girafinha_internal.alert_outbox q set state='sent', sent_at=now(), last_status=r.status_code
  from net._http_response r where q.state='sending' and q.request_id=r.id and r.status_code between 200 and 299;
  update girafinha_internal.alert_outbox q set state='pending', next_attempt=now()+ interval '5 minutes', last_status=r.status_code, request_id=null
  from net._http_response r where q.state='sending' and q.request_id=r.id and (r.status_code is null or r.status_code not between 200 and 299);
  update girafinha_internal.alert_outbox set state='pending', request_id=null, next_attempt=now()+interval '5 minutes'
  where state='sending' and last_attempt < now()-interval '3 minutes';
  select decrypted_secret into token from vault.decrypted_secrets where name='girafinha_webhook_token';
  if token is null then raise warning 'Website alert token missing'; return; end if;
  for item in select lead_id from girafinha_internal.alert_outbox where state='pending' and next_attempt<=now() order by next_attempt limit 20 for update skip locked loop
    begin
      select net.http_post(url:='https://sfdbswqyqgcdxwsgyfur.supabase.co/functions/v1/avisar-pedido', headers:=jsonb_build_object('Content-Type','application/json','x-alert-token',token), body:=jsonb_build_object('type','INSERT','schema','public','table','reservation_leads','record',jsonb_build_object('id',item.lead_id)), timeout_milliseconds:=10000) into request_number;
      update girafinha_internal.alert_outbox set state='sending',request_id=request_number,attempts=attempts+1,last_attempt=now() where lead_id=item.lead_id;
    exception when others then
      update girafinha_internal.alert_outbox set state='pending',attempts=attempts+1,last_attempt=now(),next_attempt=now()+interval '5 minutes' where lead_id=item.lead_id;
    end;
  end loop;
end $$;
revoke all on function girafinha_internal.process_alerts() from public, anon, authenticated;
select cron.schedule('girafinha_avisos_processar','* * * * *','select girafinha_internal.process_alerts()');
