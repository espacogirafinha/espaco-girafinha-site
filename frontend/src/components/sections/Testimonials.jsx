import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/card';

const Testimonials = ({ testimonials = [] }) => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (total ? (prev + 1) % total : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  // Scroll carousel when index changes
  useEffect(() => {
    const carousel = document.getElementById('testimonials-carousel');
    if (carousel && total) {
      const cardWidth = carousel.scrollWidth / total;
      carousel.scrollTo({ left: cardWidth * current, behavior: 'smooth' });
    }
  }, [current, total]);

  return (
    <section className="py-12 px-4 bg-white md:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-7 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#29423D] mb-4">O que dizem os pais</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mb-4"></div>
          <p className="text-sm text-gray-600 md:text-xl">Conheça as experiências partilhadas pelas famílias</p>
        </div>

        <div className="relative group/testimonials">
          <button
            onClick={() => setCurrent((p) => (p - 1 + total) % total)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover/testimonials:opacity-100 transition-opacity duration-300"
            aria-label="Anterior">
            <ChevronLeft className="w-6 h-6 text-teal-600" />
          </button>
          <button
            onClick={() => setCurrent((p) => (p + 1) % total)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover/testimonials:opacity-100 transition-opacity duration-300"
            aria-label="Próximo">
            <ChevronRight className="w-6 h-6 text-teal-600" />
          </button>

          <div id="testimonials-carousel" className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 md:gap-6 md:px-0">
              {testimonials.map((t, index) => (
                <div key={t.id} className="flex-none w-[82vw] sm:w-[70vw] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                  <Card className={`bg-white border hover:shadow-md transition-all duration-300 h-full ${
                    index === current ? 'border-[#C6E5DB] shadow-sm' : 'border-[#E2EDE8] hover:border-[#C6E5DB]'
                  }`}>
                    <CardHeader className="p-4 pb-2 md:p-6 md:pb-3">
                      <div className="flex gap-1 mb-2 md:mb-4">
                        {[...Array(t.rating ?? 5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-[#4E968B]" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <Quote className="h-6 w-6 text-teal-200 md:h-8 md:w-8" />
                    </CardHeader>
                    <CardContent className="p-4 pt-2 md:p-6 md:pt-3">
                      <p className="text-sm text-gray-700 leading-relaxed mb-4 italic md:mb-6 md:text-base">"{t.text}"</p>
                      <div className="border-t border-gray-200 pt-3 md:pt-4">
                        <p className="font-bold text-gray-900">{t.author}</p>
                        <p className="text-sm text-gray-600">{t.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-5 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === current ? 'w-8 h-3 bg-[#378E85]' : 'w-3 h-3 bg-gray-300 hover:bg-teal-400'
                }`}
                aria-label={`Ir para avaliação ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-7 md:mt-12">
          <a
            href="https://share.google/WJZdIImo9oEzcB9ny"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#F0F8F4] hover:bg-[#E7F3EE] rounded-full px-4 py-3 text-sm border-2 md:px-6 md:text-base border-teal-200 hover:border-teal-300 transition-all duration-300 hover:shadow-lg">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-teal-500" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-800 font-semibold">Consultar avaliações no Google</span>
          </a>
          <p className="text-xs text-gray-600 mt-2 md:text-sm">⭐ Lê mais avaliações no Google Reviews</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
