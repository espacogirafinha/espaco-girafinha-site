import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SiteHeader from './sections/SiteHeader';
import SiteFooter from './sections/SiteFooter';
import FloatingWhatsApp from './sections/FloatingWhatsApp';

// Partilha a mesma identidade entre as páginas internas e a página inicial.
const BlogLayout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-[#FCFAF6]">
      <SiteHeader />
      <main className="flex-1 pt-20">{children}</main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
};

export default BlogLayout;
