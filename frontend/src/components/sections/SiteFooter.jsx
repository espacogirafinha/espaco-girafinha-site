import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, MessageCircle } from 'lucide-react';
import { contactInfo } from '../../data/mock';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const SiteFooter = ({ onOpenPrivacy, onOpenTerms }) => {
  const { getWhatsAppUrl } = useWhatsApp();
  return (
    <footer className="bg-[#29443E] px-4 py-14 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.1fr_0.8fr_1fr]">
          <div>
            <img src="/Logotipo girafinha  (1).png" alt="Logótipo do Espaço Girafinha" className="h-16 w-auto" />
            <h2 className="mt-3 text-xl font-bold">Espaço Girafinha</h2>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#D5E8DF]">Festas infantis em Silves. Momentos felizes para as crianças, tranquilidade para os pais.</p>
            <div className="mt-5 flex gap-3">
              <a href={`https://instagram.com/${contactInfo.instagram}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"><Instagram className="h-5 w-5" /></a>
              <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"><Facebook className="h-5 w-5" /></a>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"><MessageCircle className="h-5 w-5" /></a>
            </div>
          </div>
          <nav aria-label="Navegação do rodapé">
            <h3 className="mb-4 font-bold">Explore</h3>
            <div className="grid gap-3 text-sm text-[#D5E8DF]">
              <a href="/#pacotes" className="hover:text-white">Packs de festas</a>
              <Link to="/servicos-externos" className="hover:text-white">Serviços externos</Link>
              <Link to="/galeria" className="hover:text-white">Galeria</Link>
              <Link to="/perguntas-frequentes" className="hover:text-white">Perguntas frequentes</Link>
              <Link to="/dicas" className="hover:text-white" data-testid="footer-blog-link">Dicas e ideias</Link>
            </div>
          </nav>
          <div>
            <h3 className="mb-4 font-bold">Estamos em Silves</h3>
            <p className="flex items-start gap-2 text-sm leading-relaxed text-[#D5E8DF]"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Rua Cândido dos Reis, n.º 1, Loja A, 8300-126 Silves</p>
            <a href={`tel:${contactInfo.phone}`} className="mt-4 block text-sm font-semibold text-white">{contactInfo.phone}</a>
            <a href={getWhatsAppUrl()} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#D9ECE4] px-5 py-3 text-sm font-bold text-[#2B635B] hover:bg-white" target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp <MessageCircle className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-6 text-xs text-[#C9DED4] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Espaço Girafinha. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-4">
            {onOpenPrivacy && <button type="button" onClick={onOpenPrivacy} className="hover:text-white">Política de Privacidade</button>}
            {onOpenTerms && <button type="button" onClick={onOpenTerms} className="hover:text-white">Termos e Condições</button>}
            <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Livro de Reclamações</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
