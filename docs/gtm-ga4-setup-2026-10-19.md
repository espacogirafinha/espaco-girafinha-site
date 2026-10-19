# Google Tag Manager / Analytics — Espaço Girafinha

Data de preparação: 19/10/2026
Domínio: www.espacogirafinha.pt

## Identificadores
- Contentor Google Tag Manager: `GTM-PLMF38K5`.
- Google Analytics 4 (Measurement ID): `G-2EH5K72MCN`.
- Propriedade GA4 «Espaço Girafinha Site» (Windsor.ai): `529325297`.

## Implementação do site
- GA4: carregamento direto via `CookieConsent.jsx` **só após aceitar análise**.
- GTM: carregamento dinâmico no `<head>` **só após aceitar análise**. Não inserir também o snippet estático GTM no index.html, nem iframe noscript incondicional.
- Rejeição: não carrega os scripts; quando o visitante revoga a escolha, atualiza `analytics_storage: denied`, desativa GA4 e tenta apagar cookies _ga.
- Publicidade: `ad_storage`, `ad_user_data` e `ad_personalization` negados.
- Formulário: após sucesso no INSERT em `public.reservation_leads` e com consentimento, `gtag('event', 'generate_lead', {lead_type:'pedido_disponibilidade', package_name: '...'})`. Sem PII.
- A confirmação ao cliente é independente do Analytics; a falha do Google não pode impedir a confirmação.

## ⚠️ Evitar duplicação de visitas e leads
O site **já tem** Google tag GA4 `G-2EH5K72MCN` instalada diretamente.
NÃO criar/publicar uma etiqueta «Google tag» com o mesmo Measurement ID no GTM enquanto esta implementação direta se mantiver: faria, potencialmente, duplicar `page_view` e sessões.
O `generate_lead` também é enviado diretamente. NÃO adicionar no GTM uma segunda etiqueta GA4 Event `generate_lead` disparada pelo sucesso do formulário.
Se a equipa quiser migrar tudo para GTM no futuro, proceder a um *cutover* coordenado: configurar/testar as etiquetas dentro do contentor, retirar implementação direta e publicar o site/contentor de forma sincronizada.

## Ações humanas no painel Google Analytics / Tag Manager
1. No GTM, verificar que o contentor da Girafinha não tem etiquetas GA4 duplicadas. Pode permanecer vazio — o carregamento já permite futuras etiquetas opcionais.
2. Usar «Pré-visualizar» e confirmar em navegador que o contentor só está ativo após aceitar cookies de análise. Verificar rejeição e posterior alteração no rodapé.
3. No GA4: Administrador > Apresentação de dados > Eventos principais > Novo evento principal, adicionar exatamente `generate_lead`. Não utilizar `form_start` ou clique no botão como conversão.
4. Testar com um pedido verdadeiro ou um teste controlado marcado «TESTE QA» e confirmar **apenas um** `generate_lead` no DebugView/tempo real e no Supabase. Apagar apenas o registo de teste identificado.
5. Considerar excluir tráfego interno/testes para não contaminar relatórios. Não disparar este evento na ausência de consentimento.
6. Reavaliar a instalação se, no futuro, forem criadas etiquetas publicitárias/remarketing: o consentimento atual cobre análise, não publicidade.

## Verificações após deploy
- Compilação Vercel concluída sem erros e domínio oficial mapeado ao deploy.
- Entrada sem consentimento: nenhum `gtm.js?id=GTM-PLMF38K5` nem `gtag/js?id=G-2EH5K72MCN`.
- Após aceitar: ambos são carregados uma vez.
- Formulário bem-sucedido: gera evento `generate_lead` apenas com consentimento.
- Falha Supabase: não gera `generate_lead`.
