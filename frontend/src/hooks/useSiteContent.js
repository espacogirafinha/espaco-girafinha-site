import { useEffect, useState } from 'react';
import { fetchSiteContent, getFallbackContent } from '../lib/cms';

// Modo de revisão explícito: só nos previews da Vercel.
// Evita mudar o conteúdo público do CMS antes de aprovar o lançamento.
// Não é um substituto para testar os dados reais do Supabase antes do merge.
const isBrochureReview = () => {
  if (typeof window === 'undefined') return false;
  const isVercelPreview = /^site-[a-z0-9]{8,}-espacogirafinhas-projects\.vercel\.app$/.test(window.location.hostname);
  if (!isVercelPreview) return false;

  // O modo de revisão mantém-se entre as páginas internas do mesmo preview.
  const requested = new URLSearchParams(window.location.search).has('revisao2026');
  try {
    if (requested) sessionStorage.setItem('girafinha_brochure_review', 'yes');
    return requested || sessionStorage.getItem('girafinha_brochure_review') === 'yes';
  } catch {
    return requested;
  }
};

export function useSiteContent() {
  const [content, setContent] = useState(getFallbackContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    fetchSiteContent()
      .then((data) => {
        if (!active) return;
        if (isBrochureReview()) {
          const official = getFallbackContent();
          setContent({ ...data, packages: official.packages, faqs: official.faqs });
        } else {
          setContent(data);
        }
      })
      .catch((err) => {
        console.error('CMS content fallback active:', err);
        if (active) setError(err);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => { active = false; };
  }, []);

  return { content, loading, error };
}
