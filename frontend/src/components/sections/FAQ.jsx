import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const FAQ = ({ faqs = [], headingLevel = 'h2' }) => {
  const { openWhatsApp } = useWhatsApp();
  const Heading = headingLevel;
  return (
    <section className="bg-[#FCFAF6] px-4 py-16 md:py-24" id="perguntas-frequentes">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.17em] text-[#468F85]">Tudo o que precisa de saber</p>
          <Heading className="text-3xl font-bold tracking-tight text-[#29423D] md:text-5xl">Perguntas frequentes</Heading>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#647971]">
            Respondemos às perguntas mais comuns para que possa preparar a festa com tranquilidade.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.id || faq.question} className="group rounded-2xl border border-[#DFECE7] bg-white shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 font-semibold text-[#29423D] marker:hidden md:px-7">
                <span>{faq.question}</span>
                <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-[#418B82] transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-[#EEF2EF] px-5 pb-6 pt-4 text-sm leading-relaxed text-[#64766E] md:px-7 md:text-base">{faq.answer}</div>
            </details>
          ))}
        </div>
        <div className="mt-12 rounded-[1.8rem] bg-[#EAF5F1] p-7 text-center md:p-10">
          <p className="text-xl font-bold text-[#29423D]">Ficou alguma dúvida?</p>
          <p className="mt-2 text-sm text-[#62776D]">Estamos disponíveis para ajudar a escolher a melhor opção para a sua festa.</p>
          <button type="button" data-testid="faq-cta" onClick={() => openWhatsApp()} className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#378E85] px-7 py-3 font-semibold text-white hover:bg-[#2B756D]">
            Falar com a Girafinha <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
