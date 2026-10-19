import React from 'react';
import { ArrowRight, Home, Sparkles } from 'lucide-react';
const options = [
  { title: 'Festas no nosso espaço', body: 'Playground, lanche e acompanhamento num espaço exclusivo em Silves. Escolha o seu pack e viva a festa com tranquilidade.', label: 'Conhecer os packs', href: '#pacotes', icon: Home, tone: 'bg-[#EDF8F3]' },
  { title: 'Serviços no seu local', body: 'Já tem o espaço? Levamos catering, decorações, mascotes e insufláveis até ao local do seu evento, sujeito a disponibilidade.', label: 'Explorar serviços', href: '/servicos-externos', icon: Sparkles, tone: 'bg-[#FFF3F4]' },
];
const ServiceOptions = () => (
  <section className="bg-white px-4 py-16 md:py-20">
    <div className="container mx-auto max-w-6xl">
      <div className="mb-10 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#43887F]">Duas formas de celebrar</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#29423D] md:text-4xl">A festa que imaginou, à sua maneira.</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {options.map((item) => {
          const Icon = item.icon;
          return <article key={item.title} className={item.tone + ' flex flex-col rounded-[1.8rem] p-7 md:p-10'}>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-[#378E85]"><Icon className="h-7 w-7" strokeWidth={1.7}/></div>
            <h3 className="mt-6 text-2xl font-bold text-[#29423D]">{item.title}</h3>
            <p className="mt-3 flex-1 text-base leading-relaxed text-[#63766E]">{item.body}</p>
            <a href={item.href} className="mt-7 inline-flex items-center gap-2 font-bold text-[#347F76] hover:underline">{item.label}<ArrowRight className="h-5 w-5"/></a>
          </article>;
        })}
      </div>
    </div>
  </section>
);
export default ServiceOptions;
