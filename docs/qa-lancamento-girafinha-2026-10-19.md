# Revisão pré-publicação — Espaço Girafinha
Data: 19/10/2026 — ramo `feat/site-identidade-girafinha-out2026`, PR #1 (rascunho)

## Concluído e observado
- [x] Design e versão mobile aprovados pela gestão, incluindo cartões de vantagens e testemunhos em duas colunas.
- [x] Secção de extras sem preços públicos; botões conduzem a contactos privados via WhatsApp.
- [x] Quatro packs e quinze FAQ no fallback do frontend; condições de 2026 explícitas.
- [x] Página inicial, Galeria, Serviços Externos, FAQ, formulário, rodapé e navegação revisados no código.
- [x] Vercel compilou com sucesso na versão de testes, sem erros bloqueantes (existem avisos não bloqueantes de Browserslist e Node fs.F_OK).
- [x] Política de Supabase verificada: INSERT anónimo permitido em `reservation_leads`; SELECT reservado a administradores. ID automático (IDENTITY BY DEFAULT).\n- [x] Teste SQL transacional simulando o papel `anon`: INSERT validado e revertido com ROLLBACK; nenhum pedido fictício permaneceu na tabela. SELECT por `anon` devolveu 0 registos. Este teste **não substitui** enviar o formulário pela interface.
- [x] Campos de pedido de disponibilidade têm rótulos acessíveis; acrescentada informação de privacidade e distinção de reserva confirmada.
- [x] Corrigidos metadados HTML que insinuavam catering adulto incluído em todos os packs.
- [x] Snapshot dos 3 packs e das 8 FAQ atuais guardado em `docs/cms-before-redesign-2026-10-19.json`.
- [x] Script transacional de sincronização **preparado mas NÃO executado** em `docs/preparar-sync-cms-2026-10-19.sql`.
- [x] O site público e a base de dados não foram alterados nesta fase.

## Testes ainda necessários antes do merge
- [x] Gestão confirmou em 19/10/2026 que os testemunhos publicados são autênticos e autorizados.
- [x] Gestão confirmou em 19/10/2026 autorização para divulgação das fotografias com rostos identificáveis.
- [ ] Testar manualmente no iPhone o envio de um pedido de disponibilidade real/controlo (sem duplicar o mesmo cliente) e verificar receção no Supabase/área administrativa, e texto do WhatsApp.
- [ ] Testar navegação e botões na página inicial e páginas secundárias, 375/390 px e desktop.
- [x] Código ajustado: Google Analytics só é carregado após escolha opcional; preferências podem ser alteradas no rodapé; avisos atualizados. Ainda requer teste visual de consentimento.
- [ ] Aplicar sincronização CMS coordenada com o frontend; evitar período com dados comerciais divergentes. Migração agora inclui 4 packs e 16 FAQ e possui guarda para abortar se houver alterações anteriores.
- [ ] Verificar em produção que são apresentados 4 packs corretos, 16 FAQ, extras sem preços e promoção apenas para festas realizadas até 31/12/2026.
- [ ] Confirmar que todas as imagens locais referenciadas existem e estão autorizadas.
- [ ] Planeamento explícito para remover promoções no início de janeiro de 2027.

## Bloqueios de publicação
Autorizações das fotografias/testemunhos confirmadas pela gestão. A submissão de formulário real e o funcionamento de cookies/navegação em browser ainda necessitam de teste antes da publicação. **Não fazer merge/publicação automática sem resolver.**

## Rollback
- Código: rever PR, commit anterior de `main` e usar rollback da Vercel se necessário.
- Conteúdos: snapshot JSON das coleções CMS anteriores. Rever e restaurar apenas registos necessários, em transação, sem apagar pedidos/reservas.


## Revisão final de identidade e navegação — 19/10/2026
- Confirmada consistência de packs, extras (sem preços na secção própria), serviços externos, vantagens e testemunhos.
- Ajustadas páginas locais (landing pages SEO): hero/benefícios mais compactos no telemóvel, botões na paleta aprovada e modais de privacidade/termos disponíveis.
- Ajustado Blog e páginas de artigos para identidade Girafinha, retirando gradientes e botões com verde antigo.
- Modais legais reestilizados sem alterar cláusulas substantivas.
- Corrigido o tratamento de alteração do consentimento Analytics (aceitar após rejeição / rejeitar após aceitação, com bloqueio e limpeza de cookies first-party comuns).
- Corrigidas classes responsivas redundantes no hero e packs; botão «Ler mais» em testemunhos mais sensível ao tamanho reduzido do cartão.
- O CMS público foi novamente verificado: 3 packs, 8 FAQ, 15 imagens e 5 testemunhos. **Não foi alterado**; sincronização com 4 packs e 16 FAQ continua pendente de cutover.
- Não houve testes automáticos de interação em browser nesta revisão; a compilação de preview não substitui esse teste.
