import React from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { foodOptions } from '../../data/mock';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const FoodOptions = () => {
  const { openWhatsApp } = useWhatsApp();
  return (
    <section className="bg-white px-4 py-12 md:py-20" id="catering">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-7 max-w-3xl md:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.14em] md:text-sm text-[#458C82]">Momentos deliciosos</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl text-[#29423D] md:text-4xl">Lanche e catering com tudo preparado.</h2>
          <p className="mt-3 text-sm leading-relaxed md:mt-4 md:text-base text-[#62776C]">O buffet fica disponível para todos os convidados. Nos packs Essencial e Completo, o lanche é pensado sobretudo para crianças; no Premium está incluído catering para adultos.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2 md:gap-6">
          {foodOptions.map((option, i) => (
            <article key={option.id} className={`overflow-hidden rounded-[1.5rem] border border-[#E4ECE7] p-5 md:rounded-[1.8rem] md:p-9 ${i ? 'bg-[#FFF8ED]' : 'bg-[#F2FAF6]'}`}>
              <h3 className="text-xl font-bold text-[#29423D] md:text-2xl">{option.name}</h3>
              {option.subtitle && <p className="mt-2 text-sm font-semibold text-[#8C7750]">{option.subtitle}</p>}
              <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 md:mt-6 md:gap-x-4 md:gap-y-3">
                {option.includes.map(item => <li key={item} className="flex items-start gap-2 text-xs leading-snug md:text-sm md:leading-relaxed text-[#53695F]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#3F8B81]"/><span>{item}</span></li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-6 text-center md:mt-8">
          <button onClick={() => openWhatsApp('Olá! Gostaria de saber mais sobre as opções de catering do Espaço Girafinha.')} type="button" data-testid="food-cta" className="inline-flex min-h-11 items-center justify-center md:min-h-12 gap-2 rounded-full border border-[#B8D9D1] bg-white px-7 py-3 font-semibold text-[#378E85] hover:bg-[#F1F9F6]"><MessageCircle className="h-4 w-4"/> Perguntar sobre catering</button>
        </div>
      </div>
    </section>
  );
};

export default FoodOptions;
