import React from 'react';
import { ArrowRight, Check, Clock3, Gift, MessageCircle } from 'lucide-react';
import { buildPackageWhatsAppMessage, useWhatsApp } from '../../hooks/useWhatsApp';

const Packages = ({ packages = [] }) => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <section id="pacotes" className="bg-[#F5FAF8] px-4 py-12 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto mb-7 max-w-3xl text-center md:mb-12">
          <p className="mb-2 text-xs font-bold uppercase md:mb-3 md:text-sm tracking-[0.17em] text-[#468F85]">Festas à sua medida</p>
          <h2 className="text-xl font-bold tracking-tight text-[#29423D] md:text-2xl sm:text-3xl md:text-5xl">Escolha como quer celebrar</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#61766F] md:mt-5 md:text-lg">
            Todos os packs incluem espaço exclusivo, diversão no playground, acompanhamento de um monitor e lanche para as crianças.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 md:gap-5 lg:gap-6">
          {packages.map((pkg) => {
            const isPremium = /premium/i.test(pkg.name);
            const isMorningOffer = /essencial/i.test(pkg.name) && /manh/i.test(pkg.name);
            const hasCampaign = isPremium || isMorningOffer;
            return (
              <article
                key={pkg.id}
                data-testid={`package-card-${pkg.id}`}
                className={`flex h-full flex-col overflow-hidden rounded-[1.5rem] border bg-white md:rounded-[1.9rem] shadow-sm transition-shadow hover:shadow-lg ${isPremium ? 'border-[#E7B7C5]' : 'border-[#DCEAE6]'}`}>
                <div className="flex-1 px-5 pb-4 pt-5 md:px-8 md:pb-5 md:pt-7">
                  {hasCampaign && (
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full md:mb-4 bg-[#FCEAF0] px-3 py-1.5 text-xs font-bold text-[#A94D6A]">
                      <Gift className="h-3.5 w-3.5" /> {isPremium ? 'Oferta do bolo personalizado' : 'Preço especial de manhã'}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold tracking-tight text-[#29423D]">{pkg.name}</h3>
                  <div className="mt-2 flex items-baseline gap-3 md:mt-3">
                    <strong className="text-3xl font-bold tracking-tight text-[#337F76] md:text-4xl">{pkg.price}</strong>
                    {pkg.isPromotion && pkg.originalPrice && (
                      <span className="text-base text-[#87968E] line-through">{pkg.originalPrice}</span>
                    )}
                  </div>
                  <div className="mt-4 flex flex-col gap-1.5 rounded-xl bg-[#F3F9F7] p-3 md:mt-5 md:gap-2 md:rounded-2xl md:p-4">
                    {(pkg.schedules || []).map((schedule, i) => (
                      <p key={i} className="flex items-start gap-2 text-sm font-medium leading-relaxed text-[#527269]">
                        <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#438B82]" /> {schedule}
                      </p>
                    ))}
                  </div>
                  <ul className="mt-4 space-y-2 md:mt-6 md:space-y-3">
                    {(pkg.includes || []).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm leading-snug md:gap-3 md:leading-relaxed text-[#566D66]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4E9F95] md:h-5 md:w-5" /> {item}
                      </li>
                    ))}
                  </ul>
                  {(pkg.extras || []).length > 0 && (
                    <div className="mt-4 rounded-xl bg-[#FFF9ED] p-3 md:mt-6 md:rounded-2xl md:p-4">
                      {(pkg.extras || []).map((extra, i) => (
                        <p key={i} className="text-sm font-semibold leading-relaxed text-[#786B51]">{extra}</p>
                      ))}
                    </div>
                  )}
                </div>
                <div className="border-t border-[#EAF0ED] px-5 pb-5 pt-4 md:px-8 md:pb-7 md:pt-5">
                  <p className="mb-3 text-xs leading-relaxed md:mb-4 text-[#7A8A82]">
                    Sinal de 20% para reservar. Restante pagamento no dia do evento.
                  </p>
                  <button
                    type="button"
                    data-testid={`package-cta-${pkg.id}`}
                    onClick={() => openWhatsApp(buildPackageWhatsAppMessage(pkg.name))}
                    className="inline-flex min-h-11 w-full md:min-h-12 items-center justify-center gap-2 rounded-full bg-[#378E85] px-5 py-3 font-semibold text-white transition hover:bg-[#2C756D]">
                    <MessageCircle className="h-4 w-4" /> Pedir disponibilidade <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mx-auto mt-6 max-w-4xl rounded-xl border border-[#E7E2D5] bg-[#FFF9ED] p-4 md:mt-9 md:rounded-2xl md:p-5 text-center text-sm leading-relaxed text-[#6D6D5B]">
          <p>As campanhas do Pack Essencial de manhã e do Pack Premium são exclusivas para festas <strong>realizadas até 31 de dezembro de 2026</strong>.</p>
          <p className="mt-2">Hora extra: +70 € · Valores com IVA incluído · Todas as reservas estão sujeitas à disponibilidade.</p>
        </div>
      </div>
    </section>
  );
};

export default Packages;
