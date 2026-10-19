import React from 'react';
import { ArrowRight, Home, Sparkles } from 'lucide-react';
const options = [
  { title: 'Festas no nosso espaço', body: 'Playground, lanche e acompanhamento num espaço exclusivo em Silves. Escolha o seu pack e viva a festa com tranquilidade.', label: 'Conhecer os packs', href: '#pacotes', icon: Home, tone: 'bg-[#EDF8F3]' },
  { title: 'Serviços no seu local', body: 'Já tem o espaço? Levamos catering, decorações, mascotes e insufláveis até ao local do seu evento, sujeito a disponibilidade.', label: 'Explorar serviços', href: '/servicos-externos', icon: Sparkles, tone: 'bg-[#FFF3F4]' },
];
const ServiceOptions = () => (
  <section className="bg-white px-4 py-11 md:py-18">
    <div className="container mx-auto max-w-6xl">
      <div className="mb-6 text-center md:mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#43887F]">Duas formas de celebrar</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl text-[#29423D] md:text-4xl">A festa que imaginou, à sua maneira.</h2>
      </div>
      <div className="grid gap-3 md:grid-cols-2 md:gap-5">
        {options.map((item) => {
          const Icon = item.icon;
          return <article key={item.title} className={item.tone + ' flex flex-col rounded-[1.5rem] p-5 md:rounded-[1.8rem] md:p-9'}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl md:h-14 md:w-14 md:rounded-2xl bg-white/80 text-[#378E85]"><Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.7}/></div>
            <h3 className="mt-4 text-xl font-bold md:mt-6 md:text-2xl text-[#29423D]">{item.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed md:mt-3 md:text-base text-[#63766E]">{item.body}</p>
            <a href={item.href} className="mt-4 inline-flex items-center gap-2 text-sm font-bold md:mt-7 md:text-base text-[#347F76] hover:underline">{item.label}<ArrowRight className="h-5 w-5"/></a>
          </article>;
        })}
      </div>
    </div>
  </section>
);
export default ServiceOptions;
