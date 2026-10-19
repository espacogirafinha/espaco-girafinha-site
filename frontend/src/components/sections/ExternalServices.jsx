import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, PartyPopper, Sparkles, Utensils } from 'lucide-react';

const services = [
  {
    title: 'Catering para eventos',
    description: 'Doces e salgados preparados para festas infantis, batizados e outros eventos.',
    icon: Utensils,
    accent: 'bg-[#FFF3DE]',
  },
  {
    title: 'Decorações personalizadas',
    description: 'Cenários, balões e detalhes adaptados ao tema da sua festa.',
    icon: Palette,
    accent: 'bg-[#FBE8EE]',
  },
  {
    title: 'Animação com mascotes',
    description: 'Personagens divertidas para surpreender os mais pequenos.',
    icon: PartyPopper,
    accent: 'bg-[#DBF6EF]',
  },
  {
    title: 'Aluguer de insufláveis',
    description: 'Mais diversão com opções adequadas ao local e à idade das crianças.',
    icon: Sparkles,
    accent: 'bg-[#EDEAF8]',
  },
];

const ExternalServices = () => (
  <section
    id="servicos-externos"
    aria-labelledby="servicos-externos-titulo"
    className="bg-[#FCFAF6] px-4 py-12 md:py-20"
  >
    <div className="container mx-auto max-w-6xl">
      <div className="mx-auto mb-6 max-w-3xl text-center md:mb-12">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#458C82] md:mb-3 md:text-sm">
          Serviços externos
        </p>
        <h2
          id="servicos-externos-titulo"
          className="text-2xl font-bold leading-tight tracking-tight text-[#29423D] sm:text-3xl md:text-4xl"
        >
          Também levamos a magia até ao seu evento
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#647971] md:mt-4 md:text-base">
          Já tem o local? Tratamos do catering, decoração e animação para tornar a festa ainda mais especial.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
        {services.map(({ title, description, icon: Icon, accent }) => (
          <article
            key={title}
            className="flex h-full min-w-0 flex-col rounded-[1.5rem] border border-[#D8EEE7] bg-white p-3.5 shadow-sm transition-shadow hover:shadow-md sm:p-5 md:rounded-[1.8rem] md:p-7"
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

      <div className="mt-6 text-center md:mt-9">
        <Link
          to="/servicos-externos"
          data-testid="external-services-cta"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#378E85] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2B756D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DB6F91] md:text-base"
        >
          Conhecer serviços externos
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);

export default ExternalServices;
