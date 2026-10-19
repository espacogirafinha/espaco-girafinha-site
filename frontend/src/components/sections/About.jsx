import React from 'react';
import { ArrowRight, Check, Heart, Sparkles } from 'lucide-react';

const benefits = [
  ['Mais tempo para celebrar', 'A equipa trata da organização e da limpeza final.'],
  ['Diversão acompanhada', 'Playground e atividades dinamizadas por um monitor.'],
  ['Uma festa só vossa', 'Espaço reservado exclusivamente para os seus convidados.'],
];

const About = () => (
  <section id="sobre" className="bg-white px-4 py-12 md:py-20">
    <div className="container mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div className="relative overflow-hidden rounded-[1.6rem] bg-[#F2F9F5] px-6 py-7 md:rounded-[2.5rem] md:px-12 md:py-16">
        <div aria-hidden="true" className="absolute -right-12 -top-16 h-52 w-52 rounded-full bg-[#F8E2E8]" />
        <div aria-hidden="true" className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#E1F1ED]" />
        <div className="relative z-10">
          <Sparkles className="h-7 w-7 text-[#D66F92] md:h-10 md:w-10" strokeWidth={1.5} />
          <p className="mt-5 text-xs font-bold uppercase md:mt-10 md:text-sm tracking-[0.17em] text-[#438A81]">O nosso conceito</p>
          <p className="mt-3 text-2xl font-semibold leading-snug md:mt-4 md:text-3xl tracking-tight text-[#29423D] md:text-4xl">
            Os melhores momentos são aqueles em que a família pode estar verdadeiramente presente.
          </p>
          <div className="mt-5 flex items-center gap-2 md:mt-9 md:gap-3 text-[#4A8179]">
            <Heart className="h-6 w-6" />
            <span className="text-sm font-semibold">Celebrar sem preocupações</span>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-bold uppercase md:mb-3 md:text-sm tracking-[0.17em] text-[#438A81]">Bem-vindos à Girafinha</p>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#29423D] md:text-4xl">
          Mais diversão para os pequenos. Mais tranquilidade para os pais.
        </h2>
        <p className="mt-3 text-sm leading-relaxed md:mt-5 md:text-base text-[#62756E]">
          Em Silves, criámos um espaço acolhedor para festas infantis, com área de brincadeiras, lanche e acompanhamento. Nos packs com decoração, personalizamos o cenário ao tema escolhido pela família.
        </p>
        <div className="mt-5 space-y-3 md:mt-8 md:space-y-5">
          {benefits.map(([title, description]) => (
            <div key={title} className="flex items-start gap-3 md:gap-4">
              <div className="flex h-8 w-8 shrink-0 md:h-9 md:w-9 items-center justify-center rounded-full bg-[#EAF7F3]">
                <Check className="h-5 w-5 text-[#36887E]" />
              </div>
              <div>
                <p className="font-semibold text-[#314E47]">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#6D8079]">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="#pre-reserva" data-testid="about-cta-visita" className="mt-6 inline-flex items-center md:mt-9 gap-2 font-bold text-[#34897F] hover:text-[#286E66]">
          Pedir disponibilidade <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  </section>
);

export default About;
