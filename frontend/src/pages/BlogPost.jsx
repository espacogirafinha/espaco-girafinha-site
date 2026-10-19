import React, { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, MessageCircle, Tag, Share2, Facebook } from 'lucide-react';
import BlogLayout from '../components/BlogLayout';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useSiteContent } from '../hooks/useSiteContent';
import { buildGeneralWhatsAppMessage, useWhatsApp } from '../hooks/useWhatsApp';
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

const BlogPost = () => {
  const { slug } = useParams();
  const { content, loading } = useSiteContent();
  const post = content.blog.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);
  const { openWhatsApp } = useWhatsApp();

  useEffect(() => {
    if (!post) return;

    setPageMeta({
      title: `${post.title} | Espaço Girafinha`,
      description: post.excerpt,
      path: `/dicas/${post.slug}`,
      image: post.image,
      type: 'article',
    });

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    return () => {
      // Reset og:type back to website when leaving
      setMeta('meta[property="og:type"]', 'content', 'website');
    };
  }, [post]);

  if (!post && loading) return null;
  if (!post) return <Navigate to="/dicas" replace />;

  const related = content.blog.filter((p) => p.slug !== slug).slice(0, 3);

  const openPostWhatsApp = () => {
    openWhatsApp(buildGeneralWhatsAppMessage(`o artigo "${post.title}" e festas infantis`));
  };

  const postUrl = typeof window !== 'undefined'
    ? window.location.href
    : `https://espacogirafinha.pt/dicas/${post.slug}`;

  const shareWhatsApp = () => {
    const text = `📚 ${post.title}\n\n${post.excerpt}\n\nLeia o artigo completo:`;
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + postUrl)}`,
      '_blank'
    );
  };

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`,
      '_blank',
      'width=600,height=500'
    );
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: select via temporary input
      const input = document.createElement('input');
      input.value = postUrl;
      document.body.appendChild(input);
      input.select();
      try { document.execCommand('copy'); } catch (e) { /* noop */ }
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // BlogPosting JSON-LD
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: [`https://espacogirafinha.pt${post.image}`],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Espaço Girafinha',
      url: 'https://espacogirafinha.pt',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Espaço Girafinha',
      logo: {
        '@type': 'ImageObject',
        url: 'https://espacogirafinha.pt/android-chrome-512x512.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://espacogirafinha.pt/dicas/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  };

  return (
    <BlogLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* Back link */}
      <div className="container mx-auto max-w-4xl px-4 pt-6">
        <Link
          to="/dicas"
          data-testid="back-to-blog-link"
          className="inline-flex items-center gap-2 text-[#378E85] hover:text-[#357A72] font-semibold mb-6">
          <ArrowLeft className="h-4 w-4" /> Voltar ao blog
        </Link>
      </div>

      {/* Hero image + title */}
      <article className="container mx-auto max-w-4xl px-4 pb-12">
        <div className="aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-[#DCEAE4] bg-[#EDF5F0] shadow-sm mb-6 md:mb-8">
          <img src={post.image} alt={post.imageAlt} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
          <Badge className="bg-[#FFF2DD] text-yellow-800 hover:bg-[#FFF2DD]">{post.category}</Badge>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" /> {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> {post.readTime} de leitura
          </span>
        </div>

        <h1 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-[#29423D] sm:text-3xl lg:text-4xl" data-testid="post-title">
          {post.title}
        </h1>

        <p className="mb-6 border-l-4 border-[#378E85] pl-4 text-base italic leading-relaxed text-[#61766D] md:text-lg">
          {post.excerpt}
        </p>

        {/* Article content */}
        <div
          data-testid="post-content"
          className="prose prose-lg max-w-none prose-headings:text-[#29423D] prose-headings:font-bold prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-li:leading-relaxed prose-strong:text-[#357A72] prose-a:text-[#378E85] prose-ul:my-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-gray-200">
            <Tag className="h-4 w-4 text-gray-500" />
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-teal-50 text-[#357A72] hover:bg-teal-50">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Share buttons */}
        <div className="mt-7 rounded-[1.5rem] border border-[#DCEAE4] bg-white p-5 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <Share2 className="h-5 w-5 text-[#378E85]" />
            <h3 className="text-base md:text-lg font-bold text-[#29423D]">Gostou? Partilhe com outros pais!</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={shareWhatsApp}
              data-testid="share-whatsapp-button"
              className="inline-flex items-center gap-2 bg-[#378E85] hover:bg-[#2B756D] text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-sm">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </button>
            <button
              onClick={shareFacebook}
              data-testid="share-facebook-button"
              className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#0e64d2] text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-sm">
              <Facebook className="h-4 w-4" /> Facebook
            </button>
            <button
              onClick={copyLink}
              data-testid="share-copy-link-button"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-colors border ${
                copied
                  ? 'bg-teal-50 text-[#357A72] border-teal-300'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}>
              <Share2 className="h-4 w-4" /> {copied ? 'Link copiado!' : 'Copiar link'}
            </button>
          </div>
        </div>

        {/* Inline CTA */}
        <div className="mt-8 rounded-[1.5rem] bg-[#E9F6F0] p-5 text-center md:p-8">
          <h3 className="text-2xl font-bold text-[#29423D] mb-3">Gostou destas dicas?</h3>
          <p className="text-gray-700 mb-6">
            Fale connosco e ajudamos a transformar estas ideias numa festa inesquecível.
          </p>
          <Button
            size="lg"
            onClick={openPostWhatsApp}
            data-testid="post-cta-whatsapp"
            className="bg-[#378E85] hover:bg-[#2B756D] text-white px-7 py-3 text-sm md:text-base rounded-full font-bold shadow-sm">
            <MessageCircle className="h-5 w-5 mr-2" /> Pedir Orçamento
          </Button>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="px-4 py-12 md:py-16 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#29423D] mb-8 text-center">
              Outros artigos que pode gostar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Card key={p.id} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all">
                  <Link to={`/dicas/${p.slug}`} className="block">
                    <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                      <img src={p.image} alt={p.imageAlt} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <CardContent className="p-5">
                      <Badge variant="secondary" className="bg-[#FFF2DD] text-yellow-800 hover:bg-[#FFF2DD] text-xs mb-2">
                        {p.category}
                      </Badge>
                      <h3 className="text-lg font-bold text-[#29423D] leading-snug hover:text-[#378E85] transition-colors">
                        {p.title}
                      </h3>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </BlogLayout>
  );
};

export default BlogPost;
