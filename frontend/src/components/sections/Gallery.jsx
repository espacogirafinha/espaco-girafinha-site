import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const CATEGORIES = [
  { key: 'Espaço & Crianças felizes', label: 'O nosso espaço' },
  { key: 'Decoração', label: 'Decorações personalizadas' },
  { key: 'Catering', label: 'Lanches e catering' },
];

const GalleryCategory = ({ label, images }) => {
  const track = useRef(null);
  if (!images.length) return null;
  const move = (direction) => {
    if (!track.current) return;
    track.current.scrollBy({ left: direction * Math.max(280, track.current.clientWidth * 0.7), behavior: 'smooth' });
  };
  return (
    <section className="mb-14 md:mb-16" aria-label={label}>
      <div className="mb-6 flex items-center justify-between gap-3">
        <h2 className="text-2xl font-bold tracking-tight text-[#29423D] md:text-3xl">{label}</h2>
        <div className="hidden gap-2 sm:flex">
          <button type="button" onClick={() => move(-1)} aria-label={'Anterior: ' + label} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCECE5] bg-white text-[#347F76] hover:bg-[#EAF6F1]"><ChevronLeft className="h-5 w-5" /></button>
          <button type="button" onClick={() => move(1)} aria-label={'Seguinte: ' + label} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCECE5] bg-white text-[#347F76] hover:bg-[#EAF6F1]"><ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>
      <div ref={track} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 scrollbar-hide" tabIndex={0} aria-label={'Imagens: ' + label}>
        {images.map(image => (
          <figure key={image.id} className="w-[78vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-[1.6rem] border border-[#E3ECE6] bg-white shadow-sm sm:w-[42vw] lg:w-[27vw]">
            <div className="aspect-[4/5] overflow-hidden bg-[#F3F8F6]">
              <img src={image.src} alt={image.alt || label} loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </div>
            <figcaption className="min-h-[3.5rem] px-4 py-4 text-sm font-medium text-[#536D62]">{image.alt || label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

const Gallery = ({ galleryImages = [] }) => {
  const { openWhatsApp } = useWhatsApp();
  return (
    <section id="galeria" className="bg-[#FCFAF6] px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.17em] text-[#448D84]">Inspiração para a sua festa</p>
          <h1 className="text-4xl font-bold tracking-tight text-[#29423D] md:text-5xl">A Girafinha em imagens</h1>
          <p className="mt-5 text-base leading-relaxed text-[#647971] md:text-lg">Conheça o nosso espaço, algumas decorações que preparámos e os detalhes dos nossos lanches.</p>
        </div>
        {CATEGORIES.map(cat => <GalleryCategory key={cat.key} label={cat.label} images={galleryImages.filter(image => image.category === cat.key)} />)}
        <div className="rounded-[1.8rem] bg-[#EBF6F1] p-7 text-center md:p-12">
          <h2 className="text-2xl font-bold text-[#29423D]">Já imaginou a festa do seu pequeno aqui?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#647971]">Escolha o tema, a data e o pack que mais combina com a sua família. Nós ajudamos com os detalhes.</p>
          <button type="button" data-testid="gallery-cta" onClick={() => openWhatsApp()} className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#378E85] px-7 py-3 font-semibold text-white hover:bg-[#286F68]">Pedir disponibilidade <ArrowRight className="h-5 w-5" /></button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
