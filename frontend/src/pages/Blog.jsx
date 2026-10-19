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
      <section className="bg-[#EFF8F4] px-4 py-10 md:py-16">
        <div className="container mx-auto max-w-5xl text-center">
          <Badge className="mb-3 rounded-full bg-[#DDF1E9] px-4 py-2 text-[#367F76] hover:bg-[#DDF1E9]">Dicas e inspiração</Badge>
          <h1 className="mb-3 text-3xl font-bold leading-tight tracking-tight text-[#29423D] sm:text-4xl lg:text-5xl" data-testid="blog-page-title">
            Dicas & Ideias para Festas Infantis
          </h1>
          
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#61766D] md:text-base">
            Ideias de temas, dicas e guias para preparar a próxima festa com mais tranquilidade.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="px-4 py-10 md:py-14">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                data-testid={`blog-card-${post.slug}`}
                className="overflow-hidden rounded-[1.7rem] border border-[#E0ECE5] bg-white shadow-sm transition-shadow hover:shadow-md">
                <Link to={`/dicas/${post.slug}`} className="block">
                  <div className="aspect-[16/9] overflow-hidden bg-[#EDF5F0]">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Link>
                <CardContent className="p-5 md:p-6">
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
      <section className="bg-[#E9F6F0] px-4 py-10 text-[#29423D] md:py-14">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">Pronto para a festa dos sonhos?</h3>
          <p className="mb-5 text-sm text-[#62766D] md:text-base">
            Já tem ideias? Conte-nos a sua visão e tratamos do resto.
          </p>
          <Button
            size="lg"
            onClick={openWhatsApp}
            data-testid="blog-cta-whatsapp"
            className="rounded-full bg-[#378E85] px-7 py-3 text-sm font-bold text-white hover:bg-[#2B756D] md:text-base">
            <MessageCircle className="h-5 w-5 mr-2" /> Falar pelo WhatsApp
          </Button>
        </div>
      </section>
    </BlogLayout>
  );
};

export default Blog;
