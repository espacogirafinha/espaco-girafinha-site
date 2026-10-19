import React from 'react';
import { ArrowRight, Cake, Cookie, Palette, UtensilsCrossed } from 'lucide-react';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const categories = [
  {
    name: 'Animação',
    icon: Palette,
    accent: 'bg-[#FCECF1]',
    description: 'Momentos ainda mais divertidos com personagens e atividades especiais.',
    items: [
      ['1 mascote · 1 hora', '90 €'],
      ['2 mascotes · 1 hora', '130 €'],
      ['Pinturas faciais · 1 hora', '50 €'],
      ['Pinturas faciais · festa completa', '70 €'],
    ],
  },
  {
    name: 'Doces',
    icon: Cookie,
    accent: 'bg-[#FFF8E8]',
    description: 'Pequenos detalhes para uma mesa de festa mais completa.',
    items: [
      ['Brigadeiros · 50 un.', '25 €'],
      ['Brigadeiros · 100 un.', '45 €'],
      ['Mini pastéis de nata · 25 un.', '15 €'],
      ['Mini macarons · 35 un.', '30 €'],
    ],
  },
  {
    name: 'Salgados e complementos',
    icon: UtensilsCrossed,
    accent: 'bg-[#EFF8F3]',
    description: 'Mais opções para os convidados, do salgado à fruta.',
    items: [
      ['Mini salgados caseiros · 50 un.', '35 €'],
      ['Mini salgados caseiros · 100 un.', '55 €'],
      ['Tábua de queijos, frutas e enchidos', '40 €'],
      ['Tábua de fruta laminada', '35 €'],
    ],
  },
  {
    name: 'Bolos de aniversário',
    icon: Cake,
    accent: 'bg-[#F4EFF9]',
    description: 'Bolos personalizados através dos nossos fornecedores selecionados.',
    items: [
      ['Bolo personalizado · 2 kg', '60 €'],
      ['Bolo personalizado · 3 kg', '75 €'],
      ['Bolo personalizado · 4 kg', '90 €'],
    ],
  },
];

const Extras = () => {
  const { openWhatsApp } = useWhatsApp();
  return (
    <section id="extras" className="bg-[#FCFAF6] px-4 py-20 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#458C82]">Personalize a sua festa</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#29423D] md:text-4xl">Pequenos extras, grandes sorrisos.</h2>
          <p className="mt-4 text-base leading-relaxed text-[#61766D]">Escolha os detalhes que fazem sentido para a sua festa. Temos propostas de animação, bolos, doces e opções adicionais de catering.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <article key={category.name} className="rounded-[1.8rem] border border-[#E2ECE6] bg-white p-6 shadow-sm md:p-8">
                <div className={'flex h-12 w-12 items-center justify-center rounded-2xl text-[#43877F] ' + category.accent}><Icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-2xl font-bold text-[#29423D]">{category.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6C7F76]">{category.description}</p>
                <div className="mt-6 space-y-3 border-t border-[#E9EFEB] pt-5">
                  {category.items.map(([label, price]) => (
                    <div className="flex items-start justify-between gap-4 text-sm" key={label}>
                      <span className="text-[#506A5E]">{label}</span>
                      <span className="shrink-0 font-bold text-[#3A847A]">{price}</span>
                    </div>
                  ))}
                </div>
                <button type="button" onClick={() => openWhatsApp('Olá! Gostaria de adicionar extras à minha festa no Espaço Girafinha. Tenho interesse em: ' + category.name)} className="mt-7 inline-flex items-center gap-2 font-bold text-[#39847A] hover:underline">
                  Pedir informações <ArrowRight className="h-4 w-4"/>
                </button>
              </article>
            );
          })}
        </div>
        <p className="mt-7 text-center text-sm leading-relaxed text-[#718278]">Preços com IVA incluído, sujeitos a disponibilidade. Outros tamanhos, quantidades e serviços disponíveis mediante consulta. Decorações especiais podem exigir orçamento.</p>
        <p className="mt-3 text-center text-xs text-[#718278]">A oferta promocional do bolo no Pack Premium é exclusiva para festas realizadas até 31/12/2026.</p>
      </div>
    </section>
  );
};

export default Extras;
