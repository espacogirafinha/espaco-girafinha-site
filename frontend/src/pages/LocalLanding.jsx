import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Check, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import SiteHeader from '../components/sections/SiteHeader';
import SiteFooter from '../components/sections/SiteFooter';
import FloatingWhatsApp from '../components/sections/FloatingWhatsApp';
import { PrivacyModal, TermsModal } from '../components/sections/LegalModals';
import Packages from '../components/sections/Packages';
import FAQ from '../components/sections/FAQ';
import ReservationForm from '../components/sections/ReservationForm';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { buildGeneralWhatsAppMessage, useWhatsApp } from '../hooks/useWhatsApp';
import { useSiteContent } from '../hooks/useSiteContent';
import { localBusinessSchema, partyServiceSchema, setPageMeta, siteUrl } from '../lib/seo';

const pages = {
  'festas-infantis-silves': {
    title: 'Festas Infantis em Silves | Espaço Girafinha',
    description: 'Espaço privado para festas infantis em Silves com animação, decoração personalizada e catering. Packs de festas com monitor, playground e lanche. Consulte datas e condições pelo WhatsApp.',
    h1: 'Festas Infantis em Silves',
    intro: 'Um espaço privado, seguro e preparado para crianças, no coração de Silves, para celebrar aniversários sem stress para os pais.',
    area: 'Silves',
    image: '/hero-party.jpg',
    highlights: ['Espaço exclusivo em Silves', 'Monitor incluído', 'Lanche infantil em todos os packs', 'Contacto pelo WhatsApp'],
  },
  'festas-infantis-algarve': {
    title: 'Festas Infantis no Algarve | Espaço Privado em Silves',
    description: 'Organize uma festa infantil no Algarve com espaço privado, playground, animação, decoração e catering. Ideal para famílias de Silves, Lagoa, Portimão e Albufeira.',
    h1: 'Festas Infantis no Algarve',
    intro: 'Recebemos famílias de várias zonas do Algarve que procuram uma festa bonita, prática e pronta a acontecer.',
    area: 'Algarve',
    image: '/gallery/festa-aniversario.jpg',
    highlights: ['Localização prática em Silves', 'Pacotes completos', 'Ideal para 1 a 10 anos', 'Opções para crianças e adultos'],
  },
  'aluguer-espaco-festas-infantis': {
    title: 'Aluguer de Espaço para Festas Infantis | Espaço Girafinha',
    description: 'Aluguer de espaço para festas infantis com utilização exclusiva, playground, monitor e opções de decoração e catering em Silves, Algarve.',
    h1: 'Aluguer de Espaço para Festas Infantis',
    intro: 'Reserve um espaço exclusivo para a festa do seu filho, com atividades, apoio no dia e extras para tornar tudo mais simples.',
    area: 'Silves e Algarve',
    image: '/gallery/piscina-bolas-turquesa.jpg',
    highlights: ['Utilização exclusiva do espaço', 'Playground e brinquedos', 'Monitor/animador', 'Sinal de reserva de 20%'],
  },
};

const LocalLanding = () => {
  const { slug } = useParams();
  const page = pages[slug];
  const { openWhatsApp } = useWhatsApp();
  const { content } = useSiteContent();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  useEffect(() => {
    if (!page) return;
    setPageMeta({ title: page.title, description: page.description, path: `/${slug}`, image: page.image });
  }, [page, slug]);

  if (!page) return <Navigate to="/" replace />;

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: `${siteUrl}/${slug}`,
    about: localBusinessSchema,
    mainEntity: partyServiceSchema,
  };

  return (
    <div className="min-h-screen bg-[#FCFAF6]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, partyServiceSchema, pageSchema]) }} />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden px-4 pb-14 pt-28 md:pb-20 md:pt-36 min-h-[420px] md:min-h-[540px] flex items-center">
          <img src={page.image} alt={page.h1} className="absolute inset-0 h-full w-full object-cover" loading="eager" fetchpriority="high" />
          <div className="absolute inset-0 bg-[#23372F]/65" />
          <div className="container mx-auto relative z-10 max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
              <MapPin className="h-4 w-4" /> {page.area}
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:mt-6 md:text-6xl">{page.h1}</h1>
            <p className="mt-4 text-sm font-medium leading-relaxed text-white/95 sm:text-base md:mt-5 md:text-xl">{page.intro}</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row md:mt-8 md:gap-4">
              <Button size="lg" onClick={() => openWhatsApp(buildGeneralWhatsAppMessage(page.h1))} className="bg-[#378E85] hover:bg-[#2B756D] text-white rounded-full px-6 py-3 text-sm font-bold md:px-8 md:py-5 md:text-base">
                <MessageCircle className="h-5 w-5 mr-2" /> Pedir orçamento
              </Button>
              <Link to="/#pacotes" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold md:px-8 md:py-4 md:text-base text-[#347F76] shadow-xl hover:bg-gray-100">
                Ver pacotes
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-10 md:py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
              {page.highlights.map((item) => (
                <Card key={item} className="rounded-[1.5rem] border-[#DCEBE4] shadow-sm">
                  <CardContent className="flex items-start gap-2 p-4 text-sm md:gap-3 md:p-5 md:text-base">
                    <Check className="h-5 w-5 text-[#378E85] flex-shrink-0 mt-0.5" />
                    <p className="font-semibold text-gray-800">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FCFAF6] px-4 py-10 md:py-16">
          <div className="container mx-auto max-w-5xl text-center">
            <Sparkles className="mx-auto h-9 w-9 text-[#378E85]" />
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#29423D] md:mt-4 md:text-4xl">Uma festa especial, com tudo o que precisa</h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-[#60766D] md:mt-4 md:text-lg">
              Tratamos do espaço, da diversão e dos detalhes para que os pais possam aproveitar o dia. Pode escolher um pacote simples ou uma solução completa com decoração e catering.
            </p>
          </div>
        </section>

        <Packages packages={content.packages} />
        <FAQ faqs={content.faqs} />
        <ReservationForm packages={content.packages} />
      </main>

      <SiteFooter onOpenPrivacy={() => setPrivacyOpen(true)} onOpenTerms={() => setTermsOpen(true)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
      <FloatingWhatsApp />
    </div>
  );
};

export default LocalLanding;
