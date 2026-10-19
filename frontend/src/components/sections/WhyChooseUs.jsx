import React from 'react';
import { Shield, Lock, PartyPopper, Heart } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { features } from '../../data/mock';

const iconMap = { Shield, Lock, PartyPopper, Heart };

const WhyChooseUs = () => (
  <section className="py-12 px-4 bg-gradient-to-b from-green-50 to-yellow-50 md:py-20">
    <div className="container mx-auto">
      <div className="text-center mb-7 md:mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 md:mb-4 md:text-4xl">Porque Escolher o Espaço Girafinha?</h2>
        <div className="hidden"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 max-w-5xl mx-auto">
        {features.map((feature) => {
          const IconComponent = iconMap[feature.icon];
          return (
            <Card key={feature.id} className="hover:shadow-xl transition-shadow duration-300 border-2 border-teal-100">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full md:h-14 md:w-14 flex items-center justify-center flex-shrink-0">
                    {IconComponent && <IconComponent className="h-5 w-5 text-teal-600 md:h-7 md:w-7" />}
                  </div>
                  <div>
                    <CardTitle className="text-base text-gray-900 mb-2 md:mb-3 md:text-xl">{feature.title}</CardTitle>
                    <p className="text-sm text-gray-600 leading-relaxed md:text-base">{feature.description}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
