import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, PartyPopper, Sparkles, Utensils } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const services = [
  {
    title: 'Catering para eventos',
    description:
      'Opções doces e salgadas preparadas com carinho para festas infantis, batizados, aniversários e eventos familiares.',
    icon: Utensils,
  },
  {
    title: 'Decorações personalizadas',
    description:
      'Criamos decorações à medida do tema escolhido, desde a mesa do bolo aos balões e detalhes visuais da festa.',
    icon: Palette,
  },
  {
    title: 'Animação com mascotes',
    description: 'Momentos divertidos com mascotes para surpreender as crianças e criar memórias especiais.',
    icon: PartyPopper,
  },
  {
    title: 'Aluguer de insufláveis',
    description:
      'Insufláveis para tornar o evento mais divertido, com opções adaptadas ao espaço e à idade das crianças.',
    icon: Sparkles,
  },
];

const ExternalServices = () => (
    <section id="servicos-externos" className="py-12 px-4 bg-gradient-to-b from-white to-teal-50 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-7 md:mb-14">
          <p className="text-xs font-bold uppercase tracking-wide md:text-sm text-teal-600 mb-3">Serviços externos</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-3 md:mb-5 md:text-4xl">Também levamos a magia até ao seu evento</h2>
          <p className="max-w-3xl mx-auto text-sm text-gray-600 leading-relaxed md:text-lg">
            Se já tem o local, nós tratamos dos detalhes: catering, decoração, animação e aluguer de insufláveis
            para tornar a festa ainda mais especial.
          </p>
          <div className="hidden"></div>
        </div>

        <div className="grid grid-cols-1 grid-cols-2 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="h-full border-2 border-teal-100 bg-white/95 hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-3 pb-2 md:p-6 md:pb-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center mb-3 md:mb-4 md:h-14 md:w-14 md:rounded-full">
                    <Icon className="h-5 w-5 text-teal-600 md:h-7 md:w-7" />
                  </div>
                  <CardTitle className="text-sm text-gray-900 leading-snug md:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0 md:p-6 md:pt-0">
                  <p className="text-xs text-gray-600 leading-snug md:text-base md:leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-6 md:mt-12">
          <Button
            asChild
            size="lg"
            data-testid="external-services-cta"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-4 text-sm rounded-full font-semibold md:px-8 md:py-6 md:text-base">
            <Link to="/servicos-externos">
              Conhecer serviços externos
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
);

export default ExternalServices;
