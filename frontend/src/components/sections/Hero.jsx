import React from 'react';
import { ArrowRight, CalendarDays, Check, MapPin } from 'lucide-react';

const Hero = () => (
  <section className="relative overflow-hidden bg-[#FCFAF6] px-4 pb-14 pt-28 md:pb-24 md:pt-36">
    <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-28 h-72 w-72 rounded-full bg-[#F6DCE6]/50 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#DDF4EC]/80 blur-3xl" />

    <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
      <div className="text-left">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C8E7E2] bg-white/85 px-4 py-2 text-sm font-medium text-[#347E78]">
          <MapPin className="h-4 w-4" /> Festas infantis em Silves, Algarve
        </div>

        <h1 className="max-w-2xl text-[2.75rem] font-bold leading-[1.13] tracking-[-0.035em] text-[#29423D] sm:text-5xl lg:text-6xl">
          Uma festa especial.
          <span className="mt-1 block text-[#DB6F91]">Sem preocupações.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#53645E] md:text-xl">
          As crianças divertem-se, os pais aproveitam. No Espaço Girafinha cuidamos dos detalhes para que toda a família celebre em conjunto.
        </p>

        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#426E68]">
          <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Espaço exclusivo</span>
          <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Playground interior</span>
          <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Monitor e lanche incluídos</span>
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#pacotes" data-testid="hero-cta-precos" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#378E85] px-8 py-4 text-base font-bold text-white shadow-md shadow-[#378E85]/15 transition hover:bg-[#2B756D]">
            Conhecer os packs <ArrowRight className="h-5 w-5" />
          </a>
          <a href="#pre-reserva" data-testid="hero-cta-orcamento" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#A8D6CF] bg-white px-8 py-4 text-base font-bold text-[#327D75] transition hover:bg-[#F0FAF7]">
            <CalendarDays className="h-5 w-5" /> Consultar disponibilidade
          </a>
        </div>
        <p className="mt-5 text-sm text-[#73817B]">Para festas no nosso espaço ou serviços externos para o seu evento.</p>
      </div>

      <div className="relative mx-auto w-full max-w-[530px]">
        <div aria-hidden="true" className="absolute -inset-4 rotate-[3deg] rounded-[2.7rem] bg-[#F5D7DF] md:-inset-5" />
        <img
          src="/hero-party.jpg"
          alt="Espaço Girafinha preparado para uma festa infantil"
          className="relative h-[390px] w-full rounded-[2.4rem] object-cover shadow-xl shadow-[#29423D]/10 md:h-[520px]"
          fetchPriority="high"
        />
        <div className="absolute -bottom-5 left-5 right-5 flex items-center justify-center rounded-2xl border border-white bg-[#FFF9ED] px-5 py-4 text-center shadow-md md:left-8 md:right-8">
          <p className="font-semibold text-[#52736C]">Em Silves, criamos festas para recordar com carinho.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
