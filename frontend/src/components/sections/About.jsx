import React from 'react';
import { ArrowRight, Check, Heart, Sparkles } from 'lucide-react';

const benefits = [
  ['Mais tempo para celebrar', 'A equipa trata da organização e da limpeza final.'],
  ['Diversão acompanhada', 'Playground e atividades dinamizadas por um monitor.'],
  ['Uma festa só vossa', 'Espaço reservado exclusivamente para os seus convidados.'],
];

const About = () => (
  <section id="sobre" className="bg-white px-4 py-20 md:py-24">
    <div className="container mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F2F9F5] px-8 py-12 md:px-12 md:py-16">
        <div aria-hidden="true" className="absolute -right-12 -top-16 h-52 w-52 rounded-full bg-[#F8E2E8]" />
        <div aria-hidden="true" className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#E1F1ED]" />
        <div className="relative z-10">
          <Sparkles className="h-10 w-10 text-[#D66F92]" strokeWidth={1.5} />
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.17em] text-[#438A81]">O nosso conceito</p>
          <p className="mt-4 text-3xl font-semibold leading-snug tracking-tight text-[#29423D] md:text-4xl">
            Os melhores momentos são aqueles em que a família pode estar verdadeiramente presente.
          </p>
          <div className="mt-9 flex items-center gap-3 text-[#4A8179]">
            <Heart className="h-6 w-6" />
            <span className="text-sm font-semibold">Celebrar sem preocupações</span>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.17em] text-[#438A81]">Bem-vindos à Girafinha</p>
        <h2 className="text-3xl font-bold tracking-tight text-[#29423D] md:text-4xl">
          Mais diversão para os pequenos. Mais tranquilidade para os pais.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-[#62756E]">
          Em Silves, criámos um espaço acolhedor para festas infantis, com área de brincadeiras, lanche e acompanhamento. Nos packs com decoração, personalizamos o cenário ao tema escolhido pela família.
        </p>
        <div className="mt-8 space-y-5">
          {benefits.map(([title, description]) => (
            <div key={title} className="flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF7F3]">
                <Check className="h-5 w-5 text-[#36887E]" />
              </div>
              <div>
                <p className="font-semibold text-[#314E47]">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#6D8079]">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="#pre-reserva" data-testid="about-cta-visita" className="mt-9 inline-flex items-center gap-2 font-bold text-[#34897F] hover:text-[#286E66]">
          Pedir disponibilidade <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  </section>
);

export default About;
