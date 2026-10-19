import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const FloatingWhatsApp = () => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <div
      className="fixed right-3 z-40 md:right-6 md:bottom-6"
      style={{ bottom: 'calc(12px + env(safe-area-inset-bottom, 0px))' }}
    >
      <button
        type="button"
        onClick={() => openWhatsApp()}
        data-testid="floating-whatsapp-button"
        aria-label="Falar com o Espaço Girafinha pelo WhatsApp"
        title="Falar pelo WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#378E85] text-white shadow-md shadow-[#29423D]/20 transition hover:bg-[#2B756D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DB6F91] md:h-12 md:w-auto md:gap-2 md:px-5"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span className="hidden text-sm font-semibold md:inline">WhatsApp</span>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
