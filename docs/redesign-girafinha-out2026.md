# Reformulação do site Girafinha — Outubro 2026

## Objetivo
Aumentar os pedidos de disponibilidade e reservas, com comunicação fiel ao folheto oficial de outubro de 2026.

## Direção de design
- Visual clean, acolhedor e infantil sem excesso de emojis ou ruído.
- Verde-água (#378E85), rosa suave (#DB6F91), branco quente (#FCFAF6), fundos creme e texto verde profundo (#29423D).
- Tipografia Poppins (já carregada no projeto). Fotografias reais do espaço; evitar imagens novas que exponham os rostos das crianças.
- Prioridade mobile: headline simples, CTA acessível, cartões de packs legíveis e sem barras de animação de urgência.

## Hierarquia
1. Hero — proposta de valor e acesso aos packs / disponibilidade
2. Packs — quatro opções com horários e preços corretos
3. Sobre — exclusividade, monitor, lanche, organização/limpeza
4. Prova social e galerias, com conteúdo devidamente autorizado
5. Pré-reserva — dados básicos, sem promessa de disponibilidade automática
6. Serviços externos, FAQ e contacto

## Ofertas de referência até 31/12/2026
- Essencial manhã 2h30 — 200 € (preço anterior 250 €), 10h30-13h.
- Essencial tarde 2h30 — 250 €, 14h-16h30 ou 17h-19h30.
- Completo 3h — 400 €, 10h-13h ou 16h-19h.
- Premium 3h — 550 €, 10h-13h, 11h-14h ou 16h-19h.
- Hora extra 70 €.
- Sinal 20%; restante no dia.
- Promoções Essencial manhã e bolo personalizado Premium só para festas REALIZADAS até 31/12/2026; não bastam reservas feitas em 2026.
- Fonte de referência: 'Packs girafinha PT-2.pdf', fornecido pela gestão.

## Importante: CMS Supabase (impede lançamento sem sincronização)
O site lê cms_packages/cms_faqs do projeto Supabase 'espacogirafinha.pt site', que substituem os valores fallback do código.
Consulta read-only de 19/10/2026 identificou três packs publicados no CMS:
1. Pack Essencial 250 €
2. Pack com Decoração 400 €
3. Pack Completo 550 €
São nomes/variações desatualizados perante o folheto oficial. 
É NECESSÁRIO rever e sincronizar cms_packages e cms_faqs, com cópia dos registos anteriores, antes de publicar a reformulação.

## Testes obrigatórios
- Visualização mobile a 375px, 390px, 768px e desktop.
- Acessibilidade: contraste, foco, nav teclado, alt de fotos.
- Cards com quatro packs, preços, horários e datas correctos.
- Não divulgar campanhas para festas em 2027.
- Fluxo de WhatsApp e formulário (com/supabase); verificar duplicações e consentimento.
- Google Analytics/SEO/Open Graph/canonical.
- Regressão nas rotas /servicos-externos, /galeria, /perguntas-frequentes, /dicas e /admin.
- Validar o site com conteúdo CMS real, não apenas os dados fallback.
- Verificar testemunhos e indicadores numéricos antes de os usar.

## Etapas seguintes
- Validar proposta visual e fotografias.
- Sincronizar CMS com aprovação explícita.
- Criar página de extras e galeria de festas com fotos autorizadas.
- Rever todo o design das páginas secundárias e FAQ.
- Ligar eventos do funil comercial a métricas (pedido recebido, orçamento, reserva confirmada) sem expor dados pessoais.
