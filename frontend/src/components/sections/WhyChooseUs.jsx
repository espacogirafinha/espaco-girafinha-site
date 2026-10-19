import React from 'react';
import { Heart, LockKeyhole, PartyPopper, ShieldCheck } from 'lucide-react';

const advantages = [
  {
    title: 'Espaço seguro',
    description: 'Um ambiente preparado para crianças, com acompanhamento durante a festa.',
    icon: ShieldCheck,
    accent: 'bg-[#DBF6EF]',
  },
  {
    title: 'Festa exclusiva',
    description: 'O espaço fica reservado só para a sua festa e os seus convidados.',
    icon: LockKeyhole,
    accent: 'bg-[#FEF2DD]',
  },
  {
    title: 'Muita diversão',
    description: 'Playground, jogos e atividades com monitor para os mais pequenos.',
    icon: PartyPopper,
    accent: 'bg-[#FBE8EE]',
  },
  {
    title: 'Pais tranquilos',
    description: 'Tratamos da organização e da limpeza para que aproveite o momento.',
    icon: Heart,
    accent: 'bg-[#EDEAF8]',
  },
];

const WhyChooseUs = () => (
  <section className="bg-[#F4FAF6] px-4 py-12 md:py-20" aria-labelledby="girafinha-beneficios-titulo">
    <div className="container mx-auto max-w-6xl">
      <div className="mb-6 text-center md:mb-12">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#458C82] md:mb-3 md:text-sm">
          O nosso compromisso
        </p>
        <h2 id="girafinha-beneficios-titulo" className="text-2xl font-bold tracking-tight text-[#29423D] sm:text-3xl md:text-4xl">
          Porque escolher a Girafinha?
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
        {advantages.map(({ title, description, icon: Icon, accent }) => (
          <article
            key={title}
            className="flex h-full flex-col rounded-[1.5rem] border border-[#D8EEE7] bg-white p-3.5 shadow-sm transition-shadow hover:shadow-md sm:p-5 md:rounded-[1.8rem] md:p-7"
          >
            <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-[#398E84] md:mb-5 md:h-14 md:w-14 md:rounded-2xl ${accent}`}>
              <Icon className="h-5 w-5 md:h-7 md:w-7" aria-hidden="true" />
            </div>
            <h3 className="text-sm font-bold leading-snug text-[#29423D] md:text-lg">
              {title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#60766D] md:mt-3 md:text-sm">
              {description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
