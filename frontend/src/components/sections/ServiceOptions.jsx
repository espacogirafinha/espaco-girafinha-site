import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

const options = [
  {
    title: 'Festas no nosso espaço',
    description:
      'Celebre no nosso espaço para festas infantis em Silves, com ambiente privado, animação, decoração e opções de catering.',
    icon: Home,
    cta: 'Ver pacotes',
    href: '/#pacotes',
  },
  {
    title: 'Serviços externos para o seu evento',
    description:
      'Se já tem local, levamos serviços para festas no Algarve: catering, decorações personalizadas, mascotes e insufláveis.',
    icon: Sparkles,
    cta: 'Conhecer serviços externos',
    href: '/servicos-externos',
  },
];

const ServiceOptions = () => (
  <section className="px-4 py-14 bg-white">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-10">
        <p className="text-sm font-bold uppercase tracking-wide text-teal-600 mb-3">Duas formas de celebrar</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Escolha como quer preparar a festa</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Organizamos festas infantis em Silves no nosso espaço ou levamos serviços externos ao local do seu evento.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {options.map((option) => {
          const Icon = option.icon;

          return (
            <Card key={option.title} className="h-full border-2 border-teal-100 bg-gradient-to-br from-white to-teal-50 shadow-md">
              <CardContent className="p-6 md:p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 text-teal-700">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{option.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{option.description}</p>
                <Button
                  asChild
                  className="mt-6 rounded-full bg-teal-600 px-6 py-5 font-semibold text-white hover:bg-teal-700">
                  <Link to={option.href}>
                    {option.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServiceOptions;
