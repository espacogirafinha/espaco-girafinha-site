import React from 'react';
import { ArrowRight, CalendarDays, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import { contactInfo } from '../../data/mock';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const Contact = () => {
  const { openWhatsApp } = useWhatsApp();
  return (
    <section id="contacto" className="bg-[#F7F9F5] px-4 py-20 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.17em] text-[#468F85]">Vamos conversar?</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#29423D] md:text-5xl">A próxima festa pode ser aqui.</h2>
          <p className="mt-5 text-base leading-relaxed text-[#62766E]">Partilhe connosco a data que tem em mente. Ajudamos a escolher o pack certo e a esclarecer todos os detalhes.</p>
        </div>
        <div className="grid overflow-hidden rounded-[2rem] border border-[#DFEAE5] bg-white shadow-sm md:grid-cols-2">
          <div className="bg-[#E9F4EF] p-7 md:p-11">
            <h3 className="text-2xl font-bold text-[#2D4B42]">Quer saber se a data está livre?</h3>
            <p className="mt-4 leading-relaxed text-[#60766C]">Preencha o pedido de disponibilidade com a data e o horário pretendidos. Confirmamos as opções consigo antes de fechar a reserva.</p>
            <a href="#pre-reserva" data-testid="contact-reservation-link" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#378E85] px-7 py-3 font-semibold text-white hover:bg-[#2A766D]">
              <CalendarDays className="h-4 w-4" /> Consultar disponibilidade
            </a>
            <p className="mt-5 text-sm text-[#6D8176]">A confirmação da reserva é feita mediante o pagamento do sinal de 20%.</p>
          </div>
          <div className="p-7 md:p-11">
            <h3 className="text-2xl font-bold text-[#2D4B42]">Fale connosco</h3>
            <div className="mt-7 space-y-6 text-[#526B61]">
              <a href={`tel:${contactInfo.phone}`} className="flex items-start gap-3 hover:text-[#337F76]"><Phone className="mt-0.5 h-5 w-5 text-[#438E84]" /><span>{contactInfo.phone}<small className="mt-1 block text-xs">Chamada para rede móvel nacional</small></span></a>
              <a href={`https://instagram.com/${contactInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-[#337F76]"><Instagram className="mt-0.5 h-5 w-5 text-[#438E84]" /><span>@{contactInfo.instagram}</span></a>
              <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#438E84]" /><span>Rua Cândido dos Reis, n.º 1, Loja A, Silves</span></p>
            </div>
            <button type="button" onClick={() => openWhatsApp()} className="mt-8 inline-flex items-center gap-2 font-bold text-[#327C73] hover:underline"><MessageCircle className="h-5 w-5" /> Conversar pelo WhatsApp <ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
