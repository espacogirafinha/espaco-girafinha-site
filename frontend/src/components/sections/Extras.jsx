import React from 'react';
import { ArrowRight, Cake, Cookie, Palette, UtensilsCrossed } from 'lucide-react';
import { useWhatsApp } from '../../hooks/useWhatsApp';

// Catálogo público sem preçário: valores e disponibilidade apenas por mensagem privada.
const categories = [
  {
    name: 'Animação',
    icon: Palette,
    accent: 'bg-[#FCECF1]',
    description: 'Momentos ainda mais divertidos com personagens e atividades especiais.',
    items: [
      'Animação com 1 ou 2 mascotes',
      'Pinturas faciais (1 hora ou festa completa)',
    ],
  },
  {
    name: 'Doces',
    icon: Cookie,
    accent: 'bg-[#FFF8E8]',
    description: 'Pequenos detalhes para uma mesa de festa mais completa.',
    items: [
      'Brigadeiros',
      'Mini pastéis de nata',
      'Mini macarons',
    ],
  },
  {
    name: 'Salgados e complementos',
    icon: UtensilsCrossed,
    accent: 'bg-[#EFF8F3]',
    description: 'Mais opções para os convidados, do salgado à fruta.',
    items: [
      'Mini salgados caseiros',
      'Tábua de queijos, frutas e enchidos',
      'Tábua de fruta laminada',
    ],
  },
  {
    name: 'Bolos de aniversário',
    icon: Cake,
    accent: 'bg-[#F4EFF9]',
    description: 'Bolos personalizados através dos nossos fornecedores selecionados.',
    items: [
      'Bolos personalizados em diferentes tamanhos',
      'Temas e decoração à escolha',
    ],
  },
];

const Extras = () => {
  const { openWhatsApp } = useWhatsApp();
  return (
    <section id="extras" className="bg-[#FCFAF6] px-4 py-12 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto mb-7 max-w-3xl text-center md:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.14em] md:text-sm text-[#458C82]">Personalize a sua festa</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl text-[#29423D] md:text-4xl">Pequenos extras, grandes sorrisos.</h2>
          <p className="mt-3 text-sm leading-relaxed md:mt-4 md:text-base text-[#61766D]">
            Escolha os detalhes que fazem sentido para a sua festa. Conheça as opções de animação, bolos, doces e catering adicional. Enviamos os preços e disponibilidade por mensagem privada.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2 md:gap-5">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <article key={category.name} className="rounded-[1.5rem] border border-[#E2ECE6] bg-white p-5 shadow-sm md:rounded-[1.8rem] md:p-8">
                <div className={'flex h-10 w-10 items-center justify-center rounded-xl md:h-12 md:w-12 text-[#43877F] ' + category.accent}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-3 text-xl font-bold md:mt-5 md:text-2xl text-[#29423D]">{category.name}</h3>
                <p className="mt-1 text-sm leading-relaxed md:mt-2 text-[#6C7F76]">{category.description}</p>
                <ul className="mt-4 space-y-2 border-t border-[#E9EFEB] pt-3 md:mt-6 md:space-y-3 md:pt-5">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-[#506A5E]">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#73AAA0]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => openWhatsApp('Olá! Gostaria de saber os preços e disponibilidade dos extras de ' + category.name + ' para uma festa no Espaço Girafinha.\nData pretendida:\nPack escolhido:')}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold md:mt-7 md:text-base text-[#39847A] hover:underline"
                >
                  Pedir preços por mensagem <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            );
          })}
        </div>
        <p className="mt-5 text-center text-xs leading-relaxed md:mt-7 md:text-sm text-[#718278]">
          Extras sujeitos a disponibilidade. Quantidades, tamanhos e serviços adicionais mediante consulta privada. Decorações especiais podem exigir orçamento personalizado.
        </p>
        <p className="mt-2 text-center text-xs text-[#718278]">
          A oferta promocional do bolo no Pack Premium é exclusiva para festas realizadas até 31/12/2026.
        </p>
      </div>
    </section>
  );
};

export default Extras;
