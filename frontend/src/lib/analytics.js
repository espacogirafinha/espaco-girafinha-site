/**
 * Medição de resultados do website.
 *
 * Não incluir nome, telefone, email, nome da criança ou mensagens em eventos.
 * A medição só é enviada quando o visitante aceitou cookies de análise.
 *
 * O Analytics GA4 continua configurado diretamente pelo site enquanto o
 * contentor GTM é preparado. NÃO criar uma segunda Google tag GA4 no GTM
 * antes de migrar a instalação direta, para evitar páginas vistas duplicadas.
 */
export const GA_MEASUREMENT_ID = 'G-2EH5K72MCN';
export const GTM_CONTAINER_ID = 'GTM-PLMF38K5';

export const trackReservationLead = (packageName) => {
  if (typeof window === 'undefined' || window.__girafinhaAnalyticsConsent !== true) {
    return false;
  }

  if (typeof window.gtag !== 'function') return false;

  // Evento recomendado do GA4 para geração de leads.
  // Disparado APENAS após confirmação do INSERT no Supabase.
  window.gtag('event', 'generate_lead', {
    lead_type: 'pedido_disponibilidade',
    package_name: packageName || 'nao_especificado',
  });
  return true;
};
