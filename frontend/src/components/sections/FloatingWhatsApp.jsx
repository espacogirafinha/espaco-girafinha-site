import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const FloatingWhatsApp = () => {
  const { openWhatsApp } = useWhatsApp();
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:bottom-6 md:left-auto md:right-6">
      <button type="button" onClick={() => openWhatsApp()} data-testid="floating-whatsapp-button" aria-label="Contactar o Espaço Girafinha pelo WhatsApp" className="flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#378E85] px-6 py-3 font-bold text-white shadow-lg shadow-[#29423D]/15 transition hover:bg-[#2B756D] md:w-auto">
        <MessageCircle className="h-5 w-5" />
        <span>Falar pelo WhatsApp</span>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
