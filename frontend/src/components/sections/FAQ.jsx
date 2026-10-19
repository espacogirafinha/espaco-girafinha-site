import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const FAQ = ({ faqs = [], headingLevel = 'h2' }) => {
  const { openWhatsApp } = useWhatsApp();
  const Heading = headingLevel;
  return (
    <section className="bg-[#FCFAF6] px-4 py-12 md:py-20" id="perguntas-frequentes">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-7 text-center md:mb-12">
          <p className="mb-2 text-xs font-bold uppercase md:mb-3 md:text-sm tracking-[0.17em] text-[#468F85]">Tudo o que precisa de saber</p>
          <Heading className="text-2xl font-bold tracking-tight sm:text-3xl text-[#29423D] md:text-5xl">Perguntas frequentes</Heading>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed md:mt-4 md:text-base text-[#647971]">
            Respondemos às perguntas mais comuns para que possa preparar a festa com tranquilidade.
          </p>
        </div>
        <div className="space-y-2.5 md:space-y-3">
          {faqs.map((faq) => (
            <details key={faq.id || faq.question} className="group rounded-xl border border-[#DFECE7] md:rounded-2xl bg-white shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 text-sm font-semibold md:px-7 md:py-5 md:text-base text-[#29423D] marker:hidden md:px-7">
                <span>{faq.question}</span>
                <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-[#418B82] transition-transform group-open:rotate-180" />
              </summary>
              <div className="border-t border-[#EEF2EF] px-4 pb-4 pt-3 text-sm md:pb-6 md:pt-4 leading-relaxed text-[#64766E] md:px-7 md:text-base">{faq.answer}</div>
            </details>
          ))}
        </div>
        <div className="mt-7 rounded-[1.5rem] bg-[#EAF5F1] p-5 md:mt-12 md:rounded-[1.8rem] md:p-7 text-center md:p-10">
          <p className="text-xl font-bold text-[#29423D]">Ficou alguma dúvida?</p>
          <p className="mt-2 text-sm text-[#62776D]">Estamos disponíveis para ajudar a escolher a melhor opção para a sua festa.</p>
          <button type="button" data-testid="faq-cta" onClick={() => openWhatsApp()} className="mt-4 inline-flex min-h-11 md:mt-5 md:min-h-12 items-center gap-2 rounded-full bg-[#378E85] px-7 py-3 font-semibold text-white hover:bg-[#2B756D]">
            Falar com a Girafinha <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
