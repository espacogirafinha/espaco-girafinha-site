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
    <section id="servicos-externos" className="py-20 px-4 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-wide text-teal-600 mb-3">Serviços externos</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-5">Também levamos a magia até ao seu evento</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Se já tem o local, nós tratamos dos detalhes: catering, decoração, animação e aluguer de insufláveis
            para tornar a festa ainda mais especial.
          </p>
          <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="h-full border-2 border-teal-100 bg-white/95 hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 leading-snug">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            data-testid="external-services-cta"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 rounded-full font-semibold">
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
