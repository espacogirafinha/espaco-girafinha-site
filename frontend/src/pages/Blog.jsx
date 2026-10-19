import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import BlogLayout from '../components/BlogLayout';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useSiteContent } from '../hooks/useSiteContent';
import { useWhatsApp } from '../hooks/useWhatsApp';
import { setPageMeta } from '../lib/seo';

const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString('pt-PT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
};

const Blog = () => {
  const { content } = useSiteContent();
  const { openWhatsApp } = useWhatsApp();
  const blogPosts = content.blog;

  useEffect(() => {
    const desc =
      'Dicas práticas, ideias de temas e guias para organizar a festa de aniversário perfeita para o seu filho em Silves, Algarve.';
    setPageMeta({
      title: 'Dicas & Ideias para Festas Infantis | Espaço Girafinha',
      description: desc,
      path: '/dicas',
      image: '/gallery/festa-aniversario.jpg',
    });

    // Update Open Graph
    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    setMeta('meta[property="og:type"]', 'content', 'website');
  }, []);

  // Blog JSON-LD for SEO
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Dicas & Ideias - Espaço Girafinha',
    description:
      'Blog com dicas práticas, ideias de temas e guias para organizar a festa de aniversário perfeita.',
    url: 'https://espacogirafinha.pt/dicas',
    publisher: {
      '@type': 'Organization',
      name: 'Espaço Girafinha',
      logo: { '@type': 'ImageObject', url: 'https://espacogirafinha.pt/android-chrome-512x512.png' },
    },
    blogPost: blogPosts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      datePublished: p.date,
      image: `https://espacogirafinha.pt${p.image}`,
      url: `https://espacogirafinha.pt/dicas/${p.slug}`,
    })),
  };

  return (
    <BlogLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />

      {/* Hero */}
      <section className="px-4 py-12 md:py-20 bg-[#EFF8F4]">
        <div className="container mx-auto max-w-5xl text-center">
          <Badge className="bg-[#DCF0E8] text-[#357A72] hover:bg-[#D3E9E2] mb-4">Dicas e inspiração</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#29423D] mb-4 leading-tight" data-testid="blog-page-title">
            Dicas & Ideias para Festas Infantis
          </h1>
          <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Ideias de temas, dicas e guias para preparar a próxima festa com mais tranquilidade.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="px-4 py-12 md:py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                data-testid={`blog-card-${post.slug}`}
                className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <Link to={`/dicas/${post.slug}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                    <Badge variant="secondary" className="bg-[#FFF2DD] text-yellow-800 hover:bg-[#FFF2DD] text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <Link to={`/dicas/${post.slug}`} className="block group">
                    <h2 className="text-xl md:text-2xl font-bold text-[#29423D] mb-3 leading-snug group-hover:text-[#378E85] transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/dicas/${post.slug}`}
                    data-testid={`blog-read-more-${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#378E85] font-semibold hover:text-[#357A72] transition-colors">
                    Ler artigo <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12 md:py-16 bg-[#378E85] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Pronto para a festa dos sonhos?</h3>
          <p className="text-base md:text-lg mb-8 text-teal-50">
            Já tem ideias? Conte-nos a sua visão e tratamos do resto.
          </p>
          <Button
            size="lg"
            onClick={openWhatsApp}
            data-testid="blog-cta-whatsapp"
            className="bg-white text-[#357A72] hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-bold shadow-xl">
            <MessageCircle className="h-5 w-5 mr-2" /> Falar pelo WhatsApp
          </Button>
        </div>
      </section>
    </BlogLayout>
  );
};

export default Blog;
