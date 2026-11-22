export async function handleRequest(req, env, fetcher = fetch) {
  if (req.method !== 'POST') return new Response('Method not allowed', {status:405});
  const authorization = req.headers.get('authorization') || '';
  const secret = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!secret || authorization !== `Bearer ${secret}`) return new Response('Unauthorized', {status:401});
  let body;
  try { body = await req.json(); } catch { return new Response('Bad request', {status:400}); }
  if (body?.type !== 'INSERT' || body?.schema !== 'public' || body?.table !== 'reservation_leads' || !Number.isSafeInteger(body?.record?.id) || body.record.id <= 0) return new Response('Bad request', {status:400});
  if (!env.RESEND_API_KEY) return new Response('Not configured', {status:503});
  try {
    const res = await fetcher('https://api.resend.com/emails', {
      method:'POST',
      headers:{'Authorization': `Bearer ${env.RESEND_API_KEY}`, 'Content-Type':'application/json', 'Idempotency-Key': `girafinha-reserva-${body.record.id}`},
      body: JSON.stringify({from:'Espaço Girafinha <avisos@avisos.espacogirafinha.pt>',to:['espacogirafinha@gmail.com'],subject:'Novo pedido de disponibilidade — Espaço Girafinha',text:'Chegou um novo pedido de disponibilidade no site. Consulta os dados na área de administração: https://www.espacogirafinha.pt/admin\n\nEste pedido ainda não confirma a reserva.'})
    });
    if (!res.ok) { console.error(`Resend request failed with status ${res.status}`); return new Response('Notification failed', {status:502}); }
    return new Response('Notification accepted', {status:200});
  } catch { console.error('Resend request failed'); return new Response('Notification failed', {status:502}); }
}
