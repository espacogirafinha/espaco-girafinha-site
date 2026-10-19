import React from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';
import { contactInfo } from '../../data/mock';

const InstagramFeed = () => (
  <section className="bg-[#FCFAF6] px-4 py-10 md:py-16">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col items-start justify-between gap-4 rounded-[1.5rem] border border-[#F0DFE5] bg-[#F8EEF1] p-5 md:gap-6 md:rounded-[2rem] md:p-8 md:flex-row md:items-center md:p-12">
        <div>
          <div className="flex items-center gap-3 text-[#A45572]"><Instagram className="h-6 w-6"/><p className="text-sm font-bold uppercase tracking-[0.14em]">Acompanhe a Girafinha</p></div>
          <h2 className="mt-3 text-2xl font-bold md:mt-4 md:text-3xl tracking-tight text-[#29423D] md:text-4xl">Mais inspiração para celebrar.</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed md:mt-3 md:text-base text-[#6D7370]">Veja as nossas decorações, novidades e momentos especiais no Instagram.</p>
        </div>
        <a href={`https://instagram.com/${contactInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center gap-2 md:min-h-12 rounded-full bg-white px-7 py-3 font-semibold text-[#9B4E69] hover:bg-[#FFF8FA]">
          Visitar Instagram <ArrowUpRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  </section>
);
export default InstagramFeed;
