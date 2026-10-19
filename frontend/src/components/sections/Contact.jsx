import React from 'react';
import { ArrowRight, CalendarDays, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import { contactInfo } from '../../data/mock';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const Contact = () => {
  const { openWhatsApp } = useWhatsApp();
  return (
    <section id="contacto" className="bg-[#F7F9F5] px-4 py-12 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto mb-7 max-w-2xl text-center md:mb-12">
          <p className="mb-2 text-xs font-bold uppercase md:mb-3 md:text-sm tracking-[0.17em] text-[#468F85]">Vamos conversar?</p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#29423D] md:text-5xl">A próxima festa pode ser aqui.</h2>
          <p className="mt-3 text-sm leading-relaxed md:mt-5 md:text-base text-[#62766E]">Partilhe connosco a data que tem em mente. Ajudamos a escolher o pack certo e a esclarecer todos os detalhes.</p>
        </div>
        <div className="grid overflow-hidden rounded-[1.5rem] border border-[#DFEAE5] md:rounded-[2rem] bg-white shadow-sm md:grid-cols-2">
          <div className="bg-[#E9F4EF] p-5 md:p-11">
            <h3 className="text-xl font-bold text-[#2D4B42] md:text-2xl">Quer saber se a data está livre?</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#60766C] md:mt-4 md:text-base">Preencha o pedido de disponibilidade com a data e o horário pretendidos. Confirmamos as opções consigo antes de fechar a reserva.</p>
            <a href="#pre-reserva" data-testid="contact-reservation-link" className="mt-5 inline-flex min-h-11 md:mt-7 md:min-h-12 items-center justify-center gap-2 rounded-full bg-[#378E85] px-7 py-3 font-semibold text-white hover:bg-[#2A766D]">
              <CalendarDays className="h-4 w-4" /> Consultar disponibilidade
            </a>
            <p className="mt-3 text-xs leading-relaxed text-[#6D8176] md:mt-5 md:text-sm">A confirmação da reserva é feita mediante o pagamento do sinal de 20%.</p>
          </div>
          <div className="p-5 md:p-11">
            <h3 className="text-2xl font-bold text-[#2D4B42]">Fale connosco</h3>
            <div className="mt-5 space-y-4 text-sm text-[#526B61] md:mt-7 md:space-y-6 md:text-base">
              <a href={`tel:${contactInfo.phone}`} className="flex items-start gap-3 hover:text-[#337F76]"><Phone className="mt-0.5 h-5 w-5 text-[#438E84]" /><span>{contactInfo.phone}<small className="mt-1 block text-xs">Chamada para rede móvel nacional</small></span></a>
              <a href={`https://instagram.com/${contactInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-[#337F76]"><Instagram className="mt-0.5 h-5 w-5 text-[#438E84]" /><span>@{contactInfo.instagram}</span></a>
              <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#438E84]" /><span>Rua Cândido dos Reis, n.º 1, Loja A, Silves</span></p>
            </div>
            <button type="button" onClick={() => openWhatsApp()} className="mt-5 inline-flex items-center gap-2 text-sm md:mt-8 md:text-base font-bold text-[#327C73] hover:underline"><MessageCircle className="h-5 w-5" /> Conversar pelo WhatsApp <ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
