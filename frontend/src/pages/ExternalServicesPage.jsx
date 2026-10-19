import React, { useEffect, useState } from 'react';
import { ArrowRight, Check, MapPin, MessageCircle } from 'lucide-react';
import SiteHeader from '../components/sections/SiteHeader';
import SiteFooter from '../components/sections/SiteFooter';
import FloatingWhatsApp from '../components/sections/FloatingWhatsApp';
import { PrivacyModal, TermsModal } from '../components/sections/LegalModals';
import { useWhatsApp } from '../hooks/useWhatsApp';
import { localBusinessSchema, setPageMeta, siteUrl } from '../lib/seo';

const services = [
  {
    title: 'Catering para eventos',
    description: 'Mesas de doces e salgados preparadas para receber os convidados com todo o cuidado.',
    image: '/images/servicos-externos/catering-eventos.jpg',
    alt: 'Mesa com catering de doces e salgados para festa',
  },
  {
    title: 'Decoração personalizada',
    description: 'Criamos cenários especiais para o tema escolhido, com balões e detalhes personalizados.',
    image: '/images/servicos-externos/decoracoes-personalizadas.jpg',
    alt: 'Cenário de festa com decoração personalizada e balões',
  },
  {
    title: 'Mascotes e animação',
    description: 'Personagens, animação e atividades que tornam o dia ainda mais memorável.',
    image: '/images/servicos-externos/animacao-mascotes.jpg',
    alt: 'Mascote numa festa infantil',
  },
  {
    title: 'Insufláveis para festas',
    description: 'Soluções para eventos no exterior, sujeitas às condições do local e à disponibilidade.',
    image: '/images/servicos-externos/aluguer-insuflaveis.jpg',
    alt: 'Insuflável montado no exterior para evento infantil',
  },
];

const faqs = [
  ['Fazem serviços em todo o Algarve?', 'Analisamos cada pedido de acordo com a localização, data e serviço necessário. Contacte-nos para confirmar disponibilidade.'],
  ['É possível contratar apenas um serviço?', 'Sim. Pode solicitar apenas catering, decoração, mascotes ou um insuflável, ou combinar vários serviços.'],
  ['Como é calculado o orçamento?', 'Preparamos uma proposta a partir da data, local, tipo de evento, número de convidados e serviços pretendidos.'],
];

const ExternalServicesPage = () => {
  const { openWhatsApp } = useWhatsApp();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  useEffect(() => {
    setPageMeta({
      title: 'Serviços Externos para Festas e Eventos | Espaço Girafinha',
      description: 'Levamos catering, decoração, mascotes e insufláveis a festas e eventos no Algarve. Orçamentos personalizados pelo Espaço Girafinha.',
      path: '/servicos-externos',
      image: '/images/servicos-externos/decoracoes-personalizadas.jpg',
    });
  }, []);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Serviços externos para festas e eventos',
    provider: { '@id': siteUrl + '/#localbusiness' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Algarve' },
    url: siteUrl + '/servicos-externos',
  };
  const message = [
    'Olá! Gostaria de pedir um orçamento para serviços externos do Espaço Girafinha.',
    'Data do evento:', 'Localidade:', 'Serviço(s) pretendido(s):',
    'Nº de convidados:', 'Tema ou ideia:', 'Obrigada!'
  ].join('\n');

  return (
    <div className="min-h-screen bg-[#FCFAF6]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, schema]) }} />
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-[#F0F8F5] px-4 pb-12 pt-24 md:pb-20 md:pt-32">
          <div aria-hidden="true" className="absolute -right-28 -top-20 h-96 w-96 rounded-full bg-[#F7E2E9]/65 blur-2xl" />
          <div className="container relative z-10 mx-auto max-w-5xl text-center">
            <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold md:px-4 md:py-2 md:text-sm text-[#397F77]"><MapPin className="h-4 w-4" /> Serviços para festas no Algarve</p>
            <h1 className="mx-auto mt-4 max-w-4xl text-3xl font-bold sm:text-4xl md:mt-6 tracking-tight text-[#29423D] md:text-6xl">
              A magia da Girafinha <span className="text-[#DB6F91]">vai até si.</span>
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:mt-6 md:text-lg text-[#62796E]">Já tem o local? Podemos cuidar do catering, decoração, animação e outros detalhes para que possa aproveitar a festa.</p>
            <button onClick={() => openWhatsApp(message)} type="button" className="mt-5 inline-flex min-h-12 md:mt-8 md:min-h-14 items-center justify-center gap-2 rounded-full bg-[#378E85] px-8 py-4 font-bold text-white hover:bg-[#2B766D]">
              <MessageCircle className="h-5 w-5" /> Pedir orçamento
            </button>
          </div>
        </section>

        <section className="px-4 py-12 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-7 max-w-3xl md:mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#4C9289]">Serviços externos</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl text-[#29423D] md:text-4xl">Escolha o que precisa para o seu evento</h2>
              <p className="mt-4 leading-relaxed text-[#65796F]">Pode contratar um único serviço ou juntar várias opções numa proposta personalizada.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 md:gap-6">
              {services.map(s => (
                <article key={s.title} className="overflow-hidden rounded-[1.8rem] border border-[#E0EBE5] bg-white shadow-sm">
                  <div className="aspect-[16/8] bg-[#EAF5F1] sm:aspect-[16/10]">
                    <img src={s.image} alt={s.alt} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="px-5 pb-5 pt-4 md:px-8 md:pb-7 md:pt-6">
                    <h3 className="text-xl font-semibold text-[#2E4D45] md:text-2xl">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed md:mt-3 md:min-h-[3rem] text-[#62786E]">{s.description}</p>
                    <button type="button" onClick={() => openWhatsApp(message + '\nServiço de interesse: ' + s.title)} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold md:mt-6 md:text-base text-[#347F76] hover:underline">
                      Pedir orçamento <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="bg-white px-4 py-12 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-center text-2xl font-bold sm:text-3xl text-[#29423D] md:text-4xl">Como funciona?</h2>
            <div className="mt-6 grid gap-3 md:mt-10 md:grid-cols-3 md:gap-5">
              {['Conte-nos a data, o local e o que idealizou', 'Preparamos uma proposta à medida', 'Combinamos todos os detalhes consigo'].map((item, i) => (
                <div key={item} className="rounded-[1.4rem] bg-[#F2F8F5] p-5 md:rounded-[1.6rem] md:p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DBF0E9] font-bold text-[#367F76]">0{i + 1}</span>
                  <p className="mt-3 text-base font-semibold leading-snug md:mt-5 md:text-lg text-[#344F47]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 md:py-20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl text-[#29423D]">Perguntas frequentes</h2>
            <div className="space-y-3">
              {faqs.map(([question, answer]) => (
                <div key={question} className="rounded-xl border border-[#E0EBE5] bg-white p-4 md:rounded-2xl md:p-6">
                  <h3 className="font-semibold text-[#344F47]">{question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#65786E]">{answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 rounded-[1.4rem] bg-[#F4E7EB] p-5 md:mt-11 md:rounded-[1.8rem] md:p-8 text-center">
              <h2 className="text-2xl font-bold text-[#29423D]">Vamos preparar o seu evento?</h2>
              <p className="mt-2 text-[#65786E]">Envie-nos os detalhes e ajudamos a encontrar a melhor solução.</p>
              <button onClick={() => openWhatsApp(message)} type="button" className="mt-4 inline-flex min-h-11 md:mt-6 md:min-h-12 items-center gap-2 rounded-full bg-[#378E85] px-7 py-3 font-semibold text-white hover:bg-[#2B766D]">
                Pedir orçamento <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter onOpenPrivacy={() => setPrivacyOpen(true)} onOpenTerms={() => setTermsOpen(true)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
      <FloatingWhatsApp />
    </div>
  );
};

export default ExternalServicesPage;
