# Revisão pré-publicação — Espaço Girafinha
Data: 19/10/2026 — ramo `feat/site-identidade-girafinha-out2026`, PR #1 (rascunho)

## Concluído e observado
- [x] Design e versão mobile aprovados pela gestão, incluindo cartões de vantagens e testemunhos em duas colunas.
- [x] Secção de extras sem preços públicos; botões conduzem a contactos privados via WhatsApp.
- [x] Quatro packs e quinze FAQ no fallback do frontend; condições de 2026 explícitas.
- [x] Página inicial, Galeria, Serviços Externos, FAQ, formulário, rodapé e navegação revisados no código.
- [x] Vercel compilou com sucesso na versão de testes, sem erros bloqueantes (existem avisos não bloqueantes de Browserslist e Node fs.F_OK).
- [x] Política de Supabase verificada: INSERT anónimo permitido em `reservation_leads`; SELECT reservado a administradores. ID automático (IDENTITY BY DEFAULT).
- [x] Campos de pedido de disponibilidade têm rótulos acessíveis; acrescentada informação de privacidade e distinção de reserva confirmada.
- [x] Corrigidos metadados HTML que insinuavam catering adulto incluído em todos os packs.
- [x] Snapshot dos 3 packs e das 8 FAQ atuais guardado em `docs/cms-before-redesign-2026-10-19.json`.
- [x] Script transacional de sincronização **preparado mas NÃO executado** em `docs/preparar-sync-cms-2026-10-19.sql`.
- [x] O site público e a base de dados não foram alterados nesta fase.

## Testes ainda necessários antes do merge
- [ ] Confirmar que os testemunhos atuais (Marta, Ana, Amanda, Jéssica, Tânia) são autênticos e que a divulgação foi autorizada.
- [ ] Confirmar consentimento/direito de utilização para fotografias de crianças identificáveis, em particular `hero-party.jpg` e galeria.
- [ ] Testar manualmente no iPhone o envio de um pedido de disponibilidade real/controlo (sem duplicar o mesmo cliente) e verificar receção no Supabase/área administrativa, e texto do WhatsApp.
- [ ] Testar navegação e botões na página inicial e páginas secundárias, 375/390 px e desktop.
- [ ] Verificar política de privacidade, cookies e analytics na página pública (Google tag é carregada).
- [ ] Aplicar sincronização CMS coordenada com o frontend; evitar período com dados comerciais divergentes.
- [ ] Verificar em produção que são apresentados 4 packs corretos, 15 FAQ, extras sem preços e promoção apenas para festas realizadas até 31/12/2026.
- [ ] Confirmar que todas as imagens locais referenciadas existem e estão autorizadas.
- [ ] Planeamento explícito para remover promoções no início de janeiro de 2027.

## Bloqueios de publicação
Fotografias/testemunhos por validar e submissão real do formulário ainda não testada. **Não fazer merge/publicação automática sem resolver.**

## Rollback
- Código: rever PR, commit anterior de `main` e usar rollback da Vercel se necessário.
- Conteúdos: snapshot JSON das coleções CMS anteriores. Rever e restaurar apenas registos necessários, em transação, sem apagar pedidos/reservas.
