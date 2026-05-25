import React, { useEffect } from 'react';
import { Check, HelpCircle, Home, MapPin, MessageCircle, Palette, PartyPopper, Sparkles, Utensils } from 'lucide-react';
import SiteHeader from '../components/sections/SiteHeader';
import SiteFooter from '../components/sections/SiteFooter';
import FloatingWhatsApp from '../components/sections/FloatingWhatsApp';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useWhatsApp } from '../hooks/useWhatsApp';
import { localBusinessSchema, setPageMeta, siteUrl } from '../lib/seo';

const services = [
  {
    title: 'Catering para eventos',
    description:
      'Preparamos opções doces e salgadas para festas infantis, batizados, aniversários e eventos familiares, com apresentação cuidada e adaptada ao tipo de celebração.',
    icon: Utensils,
    image: '/images/servicos-externos/catering-eventos.jpg',
    imageAlt: 'Mesa de catering para eventos com fruta, doces e salgados preparados para festa',
  },
  {
    title: 'Decorações personalizadas',
    description:
      'Criamos decorações personalizadas à medida do tema escolhido, desde a mesa do bolo aos balões, fundos e pequenos detalhes visuais da festa.',
    icon: Palette,
    image: '/images/servicos-externos/decoracoes-personalizadas.jpg',
    imageAlt: 'Decoração personalizada com balões coloridos e cenário temático para festa infantil',
  },
  {
    title: 'Animação com mascotes',
    description:
      'Levamos animação infantil e mascotes para surpreender as crianças, criar momentos divertidos e tornar o evento mais memorável.',
    icon: PartyPopper,
    image: '/images/servicos-externos/animacao-mascotes.jpg',
    imageAlt: 'Mascote em festa infantil com insuflável e balões de modelar',
  },
  {
    title: 'Aluguer de insufláveis',
    description:
      'Disponibilizamos aluguer de insufláveis para eventos, com opções pensadas para o espaço disponível e para a idade das crianças.',
    icon: Sparkles,
    image: '/images/servicos-externos/aluguer-insuflaveis.jpg',
    imageAlt: 'Insuflável colorido montado no exterior para festa infantil',
  },
];

const idealFor = ['Aniversários', 'Batizados', 'Festas em casa', 'Escolas', 'Empresas', 'Eventos ao ar livre'];

const steps = [
  'Envia-nos a data, local e tipo de evento',
  'Preparamos uma proposta personalizada',
  'Tratamos dos detalhes para que aproveite a festa',
];

const faqs = [
  {
    question: 'Fazem serviços externos em todo o Algarve?',
    answer:
      'Analisamos cada pedido conforme a data, o local e o tipo de serviço necessário. Partilhe os detalhes por WhatsApp para confirmarmos disponibilidade.',
  },
  {
    question: 'Posso pedir apenas um serviço, como catering ou decoração?',
    answer:
      'Sim. Pode pedir apenas catering para eventos, decorações personalizadas, animação com mascotes, aluguer de insufláveis ou combinar vários serviços.',
  },
  {
    question: 'A proposta é adaptada ao meu evento?',
    answer:
      'Sim. Cada orçamento é preparado de acordo com o local, idade das crianças, tema da festa, número de convidados e serviços pretendidos.',
  },
];

const ExternalServicesPage = () => {
  const { openWhatsApp } = useWhatsApp();

  useEffect(() => {
    setPageMeta({
      title: 'Serviços Externos para Festas e Eventos | Espaço Girafinha',
      description:
        'Serviços para festas no Algarve: catering para eventos, decorações personalizadas, animação infantil com mascotes e aluguer de insufláveis.',
      path: '/servicos-externos',
      image: '/images/servicos-externos/decoracoes-personalizadas.jpg',
    });
  }, []);

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Serviços externos para festas e eventos',
    description:
      'Serviços para festas no Algarve com catering para eventos, decorações personalizadas, animação infantil e aluguer de insufláveis.',
    provider: { '@id': `${siteUrl}/#localbusiness` },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Algarve',
    },
    url: `${siteUrl}/servicos-externos`,
  };

  const whatsappText =
    'Olá! Gostaria de pedir um orçamento para serviços externos do Espaço Girafinha.';

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-yellow-50 to-green-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, pageSchema]) }} />
      <SiteHeader />

      <main>
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-yellow-50 to-green-100" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-white/60" />
          <div className="container mx-auto relative z-10 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-teal-700 shadow-sm">
              <MapPin className="h-4 w-4" />
              Serviços para festas no Algarve
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Serviços externos para festas e eventos
            </h1>
            <p className="mt-6 text-lg md:text-2xl font-semibold leading-relaxed text-gray-700">
              Se já tem o local, nós levamos a magia até si: catering, decoração, animação e insufláveis para tornar o
              seu evento especial.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-bold"
                onClick={() => openWhatsApp(whatsappText)}>
                <MessageCircle className="h-5 w-5" />
                Pedir orçamento
              </Button>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-teal-700 shadow hover:bg-teal-50">
                Como funciona
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">O que podemos levar até ao seu evento</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Combinamos serviços externos de forma flexível para criar uma festa prática, bonita e divertida.
              </p>
              <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Card
                    key={service.title}
                    className="overflow-hidden border-2 border-teal-100 hover:shadow-xl transition-shadow">
                    <div className="aspect-[7/5] overflow-hidden bg-teal-50">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="h-7 w-7 text-teal-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                          <p className="mt-3 text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 bg-gradient-to-b from-yellow-50 to-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <Home className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-3xl md:text-4xl font-bold text-gray-900">Ideal para</h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  Levamos apoio a festas e eventos fora do nosso espaço, mantendo o cuidado familiar e alegre do Espaço
                  Girafinha.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {idealFor.map((item) => (
                  <Card key={item} className="border-teal-100 bg-white">
                    <CardContent className="p-5 flex items-center gap-3">
                      <Check className="h-5 w-5 text-teal-600 flex-shrink-0" />
                      <p className="font-semibold text-gray-800">{item}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="bg-white px-4 py-20">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Como funciona</h2>
              <p className="mt-4 text-lg text-gray-600">Um processo simples para preparar tudo com calma.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <Card key={step} className="border-2 border-teal-100 bg-teal-50/40">
                  <CardContent className="p-6">
                    <div className="h-11 w-11 rounded-full bg-teal-600 text-white flex items-center justify-center text-lg font-bold">
                      {index + 1}
                    </div>
                    <p className="mt-5 text-lg font-semibold text-gray-900 leading-snug">{step}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 bg-gradient-to-b from-green-50 to-yellow-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <HelpCircle className="mx-auto h-9 w-9 text-teal-600" />
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Perguntas frequentes</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.question} className="border-teal-100 bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 bg-teal-700 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Vamos preparar o seu evento?</h2>
            <p className="mt-4 text-lg text-teal-50">
              Envie-nos a data, o local e os serviços pretendidos para receber uma proposta personalizada.
            </p>
            <Button
              size="lg"
              className="mt-8 bg-white text-teal-700 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-bold"
              onClick={() => openWhatsApp(whatsappText)}>
              <MessageCircle className="h-5 w-5" />
              Pedir orçamento para serviços externos
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
};

export default ExternalServicesPage;
