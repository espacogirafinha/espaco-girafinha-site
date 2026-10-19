import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'O espaço', href: '/#sobre' },
  { label: 'Packs', href: '/#pacotes' },
  { label: 'Extras', href: '/#extras' },
  { label: 'Serviços externos', href: '/servicos-externos' },
  { label: 'Galeria', href: '/galeria' },
  { label: 'FAQ', href: '/perguntas-frequentes' },
  { label: 'Contacto', href: '/#contacto' },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E6EEE9] bg-[#FFFEFC]/95 backdrop-blur-md">
      <div className="container mx-auto flex min-h-[66px] md:min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4">
        <a href="/" className="flex shrink-0 items-center gap-3" aria-label="Espaço Girafinha, início">
          <img src="/Logotipo girafinha  (1).png" alt="Logótipo do Espaço Girafinha" className="h-11 w-auto object-contain md:h-14" />
          <div className="hidden sm:block">
            <div className="text-lg font-semibold tracking-tight text-[#367F76]">Espaço Girafinha</div>
            <p className="text-xs text-[#8C9A92]">Festas infantis · Silves</p>
          </div>
        </a>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-[#516860] transition hover:text-[#36887E]">
              {item.label}
            </a>
          ))}
          <Link to="/dicas" className="text-sm font-medium text-[#516860] hover:text-[#36887E]">
            Dicas
          </Link>
          <a href="/#pre-reserva" className="inline-flex items-center gap-2 rounded-full bg-[#36887E] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#286E65]">
            <CalendarDays className="h-4 w-4" /> Consultar data
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#CFE8E2] bg-white text-[#367F76] xl:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#E6EEE9] bg-[#FFFEFC] px-4 pb-5 pt-2 xl:hidden" aria-label="Menu móvel">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={close} className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#516860] hover:bg-[#EDF7F3]">
              {item.label}
            </a>
          ))}
          <Link to="/dicas" onClick={close} className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#516860] hover:bg-[#EDF7F3]">Dicas</Link>
          <a href="/#pre-reserva" onClick={close} className="mt-2 block rounded-full bg-[#36887E] px-4 py-3 text-center text-sm font-bold text-white">
            Consultar disponibilidade
          </a>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
