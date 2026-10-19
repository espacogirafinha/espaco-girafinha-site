import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SiteHeader from './sections/SiteHeader';
import SiteFooter from './sections/SiteFooter';
import FloatingWhatsApp from './sections/FloatingWhatsApp';
import { PrivacyModal, TermsModal } from './sections/LegalModals';

// Partilha a mesma identidade entre as páginas internas e a página inicial.
const BlogLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-[#FCFAF6]">
      <SiteHeader />
      <main className="flex-1 pt-20">{children}</main>
      <SiteFooter onOpenPrivacy={() => setPrivacyOpen(true)} onOpenTerms={() => setTermsOpen(true)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
      <FloatingWhatsApp />
    </div>
  );
};

export default BlogLayout;
