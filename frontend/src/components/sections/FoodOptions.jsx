import React from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { foodOptions } from '../../data/mock';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const FoodOptions = () => {
  const { openWhatsApp } = useWhatsApp();
  return (
    <section className="bg-white px-4 py-20 md:py-24" id="catering">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#458C82]">Momentos deliciosos</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#29423D] md:text-4xl">Lanche e catering com tudo preparado.</h2>
          <p className="mt-4 text-base leading-relaxed text-[#62776C]">O buffet fica disponível para todos os convidados. Nos packs Essencial e Completo, o lanche é pensado sobretudo para crianças; no Premium está incluído catering para adultos.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {foodOptions.map((option, i) => (
            <article key={option.id} className={`overflow-hidden rounded-[1.8rem] border border-[#E4ECE7] p-7 md:p-9 ${i ? 'bg-[#FFF8ED]' : 'bg-[#F2FAF6]'}`}>
              <h3 className="text-2xl font-bold text-[#29423D]">{option.name}</h3>
              {option.subtitle && <p className="mt-2 text-sm font-semibold text-[#8C7750]">{option.subtitle}</p>}
              <ul className="mt-6 grid gap-x-4 gap-y-3 sm:grid-cols-2">
                {option.includes.map(item => <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-[#53695F]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#3F8B81]"/><span>{item}</span></li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button onClick={() => openWhatsApp('Olá! Gostaria de saber mais sobre as opções de catering do Espaço Girafinha.')} type="button" data-testid="food-cta" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#B8D9D1] bg-white px-7 py-3 font-semibold text-[#378E85] hover:bg-[#F1F9F6]"><MessageCircle className="h-4 w-4"/> Perguntar sobre catering</button>
        </div>
      </div>
    </section>
  );
};

export default FoodOptions;
