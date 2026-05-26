import { contactInfo } from '../data/mock';

export const generalWhatsAppMessage = `Olá! Gostaria de receber mais informações sobre festas no Espaço Girafinha.

Data pretendida:
Idade da criança:
Nº aproximado de convidados:
Tema ou ideia da festa:

Obrigada!`;

export const buildPackageWhatsAppMessage = (packageName) => `Olá! Gostaria de saber disponibilidade para o ${packageName} no Espaço Girafinha.

Data pretendida:
Idade da criança:
Tema da festa:
Nº aproximado de crianças/convidados:
Horário pretendido:

Obrigada!`;

export const buildGeneralWhatsAppMessage = (context) => {
  if (!context) return generalWhatsAppMessage;

  return `Olá! Gostaria de receber mais informações sobre ${context} no Espaço Girafinha.

Data pretendida:
Idade da criança:
Nº aproximado de convidados:
Tema ou ideia da festa:

Obrigada!`;
};

/**
 * Helpers partilhados para abrir WhatsApp em vários contextos.
 */
export const useWhatsApp = () => {
  const phone = contactInfo.whatsapp.replace(/\+/g, '');

  const getWhatsAppUrl = (text = generalWhatsAppMessage) => {
    const message = text || generalWhatsAppMessage;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const openWhatsApp = (text) => {
    const url = getWhatsAppUrl(text);
    window.open(url, '_blank');
  };

  return { openWhatsApp, getWhatsAppUrl };
};
