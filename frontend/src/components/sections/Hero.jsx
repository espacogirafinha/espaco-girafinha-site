import React from 'react';
import { ArrowRight, CalendarDays, Check, MapPin } from 'lucide-react';

const Hero = () => (
  <section className="relative overflow-hidden bg-[#FCFAF6] px-4 pb-10 pt-24 md:pb-20 md:pt-32">
    <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-28 h-72 w-72 rounded-full bg-[#F6DCE6]/50 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#DDF4EC]/80 blur-3xl" />

    <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_0.92fr] lg:gap-14">
      <div className="text-left">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C8E7E2] bg-white/85 px-3 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm text-[#347E78]">
          <MapPin className="h-4 w-4" /> Festas infantis em Silves, Algarve
        </div>

        <h1 className="max-w-2xl text-[2.15rem] font-bold leading-[1.12] sm:text-[3rem] tracking-[-0.035em] text-[#29423D] lg:text-6xl">
          Uma festa especial.
          <span className="mt-1 block text-[#DB6F91]">Sem preocupações.</span>
        </h1>
        <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[#53645E] md:text-xl">
          As crianças divertem-se, os pais aproveitam. No Espaço Girafinha cuidamos dos detalhes para que toda a família celebre em conjunto.
        </p>

        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[0.82rem] font-semibold sm:text-sm text-[#426E68]">
          <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Espaço exclusivo</span>
          <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Playground interior</span>
          <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Monitor e lanche incluídos</span>
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-3">
          <a href="#pacotes" data-testid="hero-cta-precos" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#378E85] px-6 py-3 text-sm sm:text-base font-bold text-white shadow-md shadow-[#378E85]/15 transition hover:bg-[#2B756D]">
            Conhecer os packs <ArrowRight className="h-5 w-5" />
          </a>
          <a href="#pre-reserva" data-testid="hero-cta-orcamento" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#A8D6CF] bg-white px-6 py-3 text-sm sm:text-base font-bold text-[#327D75] transition hover:bg-[#F0FAF7]">
            <CalendarDays className="h-5 w-5" /> Consultar disponibilidade
          </a>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-[#73817B] sm:text-sm">Para festas no nosso espaço ou serviços externos para o seu evento.</p>
      </div>

      <div className="relative mx-auto w-full max-w-[530px]">
        <div aria-hidden="true" className="absolute -inset-2 rotate-[2deg] rounded-[2rem] md:-inset-5 md:rounded-[2.7rem] bg-[#F5D7DF] md:-inset-5" />
        <img
          src="/hero-party.jpg"
          alt="Espaço Girafinha preparado para uma festa infantil"
          className="relative h-[250px] w-full rounded-[1.8rem] sm:h-[350px] sm:rounded-[2.4rem] object-cover shadow-xl shadow-[#29423D]/10 md:h-[520px]"
          fetchPriority="high"
        />
        <div className="absolute -bottom-5 left-5 right-5 hidden items-center justify-center rounded-2xl md:flex border border-white bg-[#FFF9ED] px-5 py-4 text-center shadow-md md:left-8 md:right-8">
          <p className="font-semibold text-[#52736C]">Em Silves, criamos festas para recordar com carinho.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
