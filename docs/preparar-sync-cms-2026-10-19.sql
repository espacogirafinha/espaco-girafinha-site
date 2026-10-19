-- MIGRAÇÃO PREPARADA — NÃO EXECUTADA
-- Espaço Girafinha / website / outubro de 2026
-- Execute exclusivamente durante o lançamento coordenado, depois da validação dos testemunhos/imagens e QA da aplicação.
-- Ver backup em docs/cms-before-redesign-2026-10-19.json
-- O site atual consome estas tabelas EM PRODUÇÃO; não executar antecipadamente.
-- Campanhas: SOMENTE para festas realizadas até 31/12/2026.
BEGIN;
DO $guard$
BEGIN
  IF (SELECT count(*) FROM public.cms_packages) <> 3
     OR (SELECT jsonb_agg(name ORDER BY id) FROM public.cms_packages)
        <> '["Pack Essencial","Pack com Decoração","Pack Completo"]'::jsonb THEN
     RAISE EXCEPTION 'Abortado: packs alterados desde o backup, rever antes de sincronizar';
  END IF;
  IF (SELECT count(*) FROM public.cms_faqs) <> 8 THEN
     RAISE EXCEPTION 'Abortado: FAQ alteradas desde o backup, rever antes de sincronizar';
  END IF;
END
$guard$;

INSERT INTO public.cms_packages
  (id,name,price,original_price,is_promotion,popular,schedules,includes,extras,notes,sort_order,is_published,updated_at)
SELECT id,name,price,original_price,is_promotion,popular,schedules,includes,extras,notes,sort_order,is_published,now()
FROM jsonb_to_recordset($packages$[{"id":1,"name":"Pack Essencial — manhã","price":"200 €","original_price":"250 €","is_promotion":true,"popular":false,"sort_order":1,"is_published":true,"schedules":["2h30 · 10h30 às 13h00"],"includes":["Utilização exclusiva do espaço","Playground interior com piscina de bolas, obstáculos, escorregas e baloiço","Monitor/animador","Lanche para até 20 crianças"],"extras":["Hora extra: +70 €"],"notes":["É permitido trazer comida, decoração e bolo de aniversário","Sinal de 20% para reservar; restante pagamento no dia do evento","Preço especial apenas para festas realizadas até 31/12/2026"]},{"id":2,"name":"Pack Essencial — tarde","price":"250 €","original_price":"","is_promotion":false,"popular":false,"sort_order":2,"is_published":true,"schedules":["2h30 · 14h00 às 16h30 ou 17h00 às 19h30"],"includes":["Utilização exclusiva do espaço","Playground interior com piscina de bolas, obstáculos, escorregas e baloiço","Monitor/animador","Lanche para até 20 crianças"],"extras":["Hora extra: +70 €"],"notes":["É permitido trazer comida, decoração e bolo de aniversário","Sinal de 20% para reservar; restante pagamento no dia do evento"]},{"id":3,"name":"Pack Completo","price":"400 €","original_price":"","is_promotion":false,"popular":false,"sort_order":3,"is_published":true,"schedules":["3h · 10h00 às 13h00 ou 16h00 às 19h00"],"includes":["Tudo o que está incluído no Pack Essencial","Decoração personalizada no tema à escolha","Mais 30 minutos de diversão"],"extras":["Hora extra: +70 €"],"notes":["É permitido trazer comida e bolo de aniversário","Sinal de 20% para reservar; restante pagamento no dia do evento"]},{"id":4,"name":"Pack Premium","price":"550 €","original_price":"","is_promotion":true,"popular":true,"sort_order":4,"is_published":true,"schedules":["3h · 10h00 às 13h00, 11h00 às 14h00 ou 16h00 às 19h00"],"includes":["Tudo o que está incluído no Pack Completo","Catering para até 30 adultos e 20 crianças","Bolo de aniversário personalizado oferecido na campanha de 2026"],"extras":["Hora extra: +70 €"],"notes":["É permitido trazer comida e bolo de aniversário","Sinal de 20% para reservar; restante pagamento no dia do evento","Oferta do bolo apenas para festas realizadas até 31/12/2026"]}]$packages$::jsonb)
  AS x(id bigint,name text,price text,original_price text,is_promotion boolean,popular boolean,
       schedules jsonb,includes jsonb,extras jsonb,notes jsonb,sort_order integer,is_published boolean)
ON CONFLICT (id) DO UPDATE SET
  name=EXCLUDED.name,price=EXCLUDED.price,original_price=EXCLUDED.original_price,
  is_promotion=EXCLUDED.is_promotion,popular=EXCLUDED.popular,
  schedules=EXCLUDED.schedules,includes=EXCLUDED.includes,extras=EXCLUDED.extras,
  notes=EXCLUDED.notes,sort_order=EXCLUDED.sort_order,is_published=EXCLUDED.is_published,updated_at=now();

INSERT INTO public.cms_faqs
  (id,question,answer,sort_order,is_published,updated_at)
SELECT id,question,answer,sort_order,is_published,now()
FROM jsonb_to_recordset($faqs$[{"id":1,"question":"Para que idades é indicado o Espaço Girafinha?","answer":"Principalmente para crianças dos 1 aos 10 anos, com playground interior adaptado a estas idades.","sort_order":1,"is_published":true},{"id":2,"question":"Qual é a capacidade do espaço?","answer":"Recomendamos até 50 pessoas no total, incluindo as crianças.","sort_order":2,"is_published":true},{"id":3,"question":"O espaço fica exclusivo para a nossa festa?","answer":"Sim. O espaço fica reservado exclusivamente para a sua festa e para os seus convidados.","sort_order":3,"is_published":true},{"id":4,"question":"Quanto tempo duram as festas?","answer":"Os packs têm duração de 2h30 ou 3h. É possível adicionar tempo extra por 70 € por hora.","sort_order":4,"is_published":true},{"id":5,"question":"Quanto tempo antes podemos entrar?","answer":"Os pais ou responsáveis e o aniversariante podem entrar 30 minutos antes do início da festa.","sort_order":5,"is_published":true},{"id":6,"question":"Há comida para os adultos?","answer":"Sim, o buffet fica acessível a todos. Nos packs Essencial e Completo o lanche é mais infantil; o Premium inclui catering específico para até 30 adultos e 20 crianças.","sort_order":6,"is_published":true},{"id":7,"question":"Podemos levar comida, bebidas e bolo?","answer":"Sim. Podem trazer comida, bebidas e bolo de aniversário.","sort_order":7,"is_published":true},{"id":8,"question":"Fazem bolos personalizados?","answer":"Sim, trabalhamos com fornecedores selecionados. Para festas realizadas até 31/12/2026 o Pack Premium inclui a oferta promocional do bolo personalizado.","sort_order":8,"is_published":true},{"id":9,"question":"Podemos escolher o tema da decoração?","answer":"Sim. Nos packs Completo e Premium a decoração é personalizada no tema escolhido. Decorações mais elaboradas podem ser orçamentadas à parte.","sort_order":9,"is_published":true},{"id":10,"question":"Há animação e acompanhamento?","answer":"Sim. Um monitor acompanha as crianças e combina brincadeira livre com atividades orientadas adaptadas ao grupo.","sort_order":10,"is_published":true},{"id":11,"question":"O espaço tem área exterior?","answer":"Sim. Existe uma zona exterior para os adultos acompanharem as crianças e outra área nas traseiras que pode receber atividades ou insuflável extra, mediante condições e orçamento.","sort_order":11,"is_published":true},{"id":12,"question":"Como se faz a reserva?","answer":"A data fica reservada com o sinal de 20% do total. Após pagamento, enviamos o formulário de dados da festa. O restante é pago no dia do evento.","sort_order":12,"is_published":true},{"id":13,"question":"Com quanto tempo devo reservar?","answer":"Recomendamos reservar com antecedência, sobretudo para fins de semana, uma vez que algumas datas são reservadas com vários meses de antecedência.","sort_order":13,"is_published":true},{"id":14,"question":"Quem limpa o espaço após a festa?","answer":"A limpeza final fica sempre a cargo da equipa do Espaço Girafinha.","sort_order":14,"is_published":true},{"id":15,"question":"Onde fica o espaço?","answer":"Rua Cândido dos Reis, n.º 1, Loja A, 8300-126 Silves. Existem lugares de estacionamento gratuito nas redondezas.","sort_order":15,"is_published":true}]$faqs$::jsonb)
  AS x(id bigint,question text,answer text,sort_order integer,is_published boolean)
ON CONFLICT (id) DO UPDATE SET
 question=EXCLUDED.question,answer=EXCLUDED.answer,sort_order=EXCLUDED.sort_order,
 is_published=EXCLUDED.is_published,updated_at=now();

-- Evita que o próximo registo inserido automaticamente tente reutilizar os IDs 4/9...15.
SELECT setval(pg_get_serial_sequence('public.cms_packages','id'),
              GREATEST((SELECT max(id) FROM public.cms_packages),1),true);
SELECT setval(pg_get_serial_sequence('public.cms_faqs','id'),
              GREATEST((SELECT max(id) FROM public.cms_faqs),1),true);

DO $check$
BEGIN
  IF (SELECT count(*) FROM public.cms_packages WHERE is_published) <> 4
     OR (SELECT count(*) FROM public.cms_faqs WHERE is_published) <> 15 THEN
    RAISE EXCEPTION 'Abortado: contagem final incorreta';
  END IF;
END
$check$;
COMMIT;

-- Após executar, confirmar visualmente o site público e o formulário.
-- A 01/01/2027 atualizar a promoção do Essencial de manhã e a oferta do bolo Premium.
