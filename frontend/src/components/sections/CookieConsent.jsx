import React, { useEffect, useState } from 'react';

const KEY = 'girafinha_analytics_consent_v1';
const GA_ID = 'G-2EH5K72MCN';

const readChoice = () => {
  try {
    const saved = localStorage.getItem(KEY);
    return saved === 'accepted' || saved === 'rejected' ? saved : null;
  } catch {
    return null;
  }
};

const loadAnalytics = () => {
  if (document.getElementById('girafinha-ga-script')) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { anonymize_ip: true });
  const script = document.createElement('script');
  script.id = 'girafinha-ga-script';
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(script);
};

const stopAnalytics = () => {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', { analytics_storage: 'denied' });
  }
};

const CookieConsent = () => {
  const [choice, setChoice] = useState(readChoice);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (choice === 'accepted') loadAnalytics();
    if (choice === 'rejected') stopAnalytics();
  }, [choice]);

  useEffect(() => {
    const open = () => setOpened(true);
    window.addEventListener('girafinha:cookie-preferences', open);
    return () => window.removeEventListener('girafinha:cookie-preferences', open);
  }, []);

  const select = value => {
    try { localStorage.setItem(KEY, value); } catch { /* consent not persisted */ }
    setChoice(value);
    setOpened(false);
    if (value === 'rejected') stopAnalytics();
  };

  if (choice && !opened) return null;

  return (
    <aside role="dialog" aria-label="Preferências de cookies" aria-modal="false" className="fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-xl rounded-2xl border border-[#CFE8E0] bg-white p-4 shadow-xl shadow-[#29423D]/20 md:bottom-5 md:p-5">
      <p className="text-sm font-bold text-[#29423D]">A sua privacidade importa</p>
      <p className="mt-1 text-xs leading-relaxed text-[#5F7269] md:text-sm">
        Utilizamos armazenamento essencial para o funcionamento do site. O Google Analytics só é ativado se aceitar cookies de análise. Pode alterar a escolha no rodapé.
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button type="button" onClick={() => select('rejected')} className="min-h-11 rounded-full border border-[#BBDDD4] bg-white px-3 py-2 text-sm font-semibold text-[#347E75] hover:bg-[#F0F8F4]">Rejeitar análise</button>
        <button type="button" onClick={() => select('accepted')} className="min-h-11 rounded-full bg-[#378E85] px-3 py-2 text-sm font-semibold text-white hover:bg-[#286F67]">Aceitar análise</button>
      </div>
    </aside>
  );
};

export default CookieConsent;
