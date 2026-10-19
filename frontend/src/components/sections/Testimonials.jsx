import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, Quote, Star } from 'lucide-react';

const Testimonials = ({ testimonials = [] }) => {
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState({});

  if (!testimonials.length) return null;

  const visible = showAll ? testimonials : testimonials.slice(0, 4);

  return (
    <section className="bg-white px-4 py-12 md:py-20" aria-labelledby="testemunhos-titulo">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-7 text-center md:mb-12">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#458C82] md:mb-3 md:text-sm">
            Quem já celebrou connosco
          </p>
          <h2 id="testemunhos-titulo" className="text-2xl font-bold tracking-tight text-[#29423D] sm:text-3xl md:text-4xl">
            O que dizem os pais
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#647971] md:mt-4 md:text-base">
            Experiências partilhadas pelas famílias que passaram pela Girafinha.
          </p>
        </div>

        <div className="grid grid-cols-2 items-start gap-3 md:gap-5 lg:grid-cols-4">
          {visible.map((t, index) => {
            const key = String(t.id ?? index);
            const full = Boolean(expanded[key]);
            const rating = Number.isFinite(Number(t.rating)) ? Math.min(5, Math.max(0, Math.floor(Number(t.rating)))) : 0;
            const text = String(t.text || '');
            const mayNeedExpand = text.length > 70;

            return (
              <article
                key={key}
                className="min-w-0 rounded-[1.5rem] border border-[#DCEAE4] bg-[#FCFDFC] p-3.5 shadow-sm sm:p-5 md:rounded-[1.8rem] md:p-6"
              >
                <div className="flex items-center justify-between gap-1">
                  {rating > 0 && (
                    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
                      {Array.from({ length: rating }, (_, star) => (
                        <Star key={star} aria-hidden="true" className="h-3 w-3 fill-[#58A196] text-[#58A196] sm:h-3.5 sm:w-3.5" />
                      ))}
                    </div>
                  )}
                  <Quote className="ml-auto h-4 w-4 shrink-0 text-[#B2DCD1]" aria-hidden="true" />
                </div>

                <p
                  className="mt-3 text-xs italic leading-relaxed text-[#50665D] sm:text-sm"
                  style={!full ? { display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' } : undefined}
                >
                  “{text}”
                </p>

                {mayNeedExpand && (
                  <button
                    type="button"
                    aria-expanded={full}
                    onClick={() => setExpanded(current => ({ ...current, [key]: !current[key] }))}
                    className="mt-2 inline-flex min-h-7 items-center gap-1 text-xs font-semibold text-[#39887E] underline-offset-2 hover:underline"
                  >
                    {full ? 'Ler menos' : 'Ler mais'}
                  </button>
                )}

                <div className="mt-3 border-t border-[#E4EEE8] pt-3">
                  <p className="text-xs font-bold leading-snug text-[#29423D] md:text-sm">{t.author}</p>
                  {t.location && <p className="mt-0.5 text-[11px] text-[#74857B] md:text-xs">{t.location}</p>}
                </div>
              </article>
            );
          })}
        </div>

        {testimonials.length > 4 && (
          <div className="mt-5 text-center md:mt-7">
            <button
              type="button"
              aria-expanded={showAll}
              onClick={() => setShowAll(value => !value)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#BEDFD5] bg-white px-5 py-2.5 text-sm font-semibold text-[#367E74] transition hover:bg-[#EFF8F3]"
            >
              {showAll ? 'Mostrar menos testemunhos' : 'Ver mais testemunhos'}
              <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
          </div>
        )}

        <div className="mt-5 text-center md:mt-8">
          <a
            href="https://share.google/WJZdIImo9oEzcB9ny"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#E9F6F1] px-5 py-2.5 text-sm font-semibold text-[#347F75] transition hover:bg-[#DAEEE6]"
          >
            Ver avaliações no Google <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
