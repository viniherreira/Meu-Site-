import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/contato';
import { tratamentos } from '@/content/tratamentos';
import { artigos } from '@/content/blog';

// Data da última mudança real de conteúdo — não usar new Date(), senão toda
// build diz ao Google que tudo mudou.
const ATUALIZADO_EM = '2026-10-27';

export default function sitemap(): MetadataRoute.Sitemap {
  const pagina = (path: string, lastModified: string, priority: number) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(`${lastModified}T12:00:00-03:00`),
    priority,
  });

  return [
    pagina('', ATUALIZADO_EM, 1),
    ...tratamentos.map((t) => pagina(`/${t.slug}`, t.atualizadoEm, 0.9)),
    pagina('/sobre', ATUALIZADO_EM, 0.7),
    pagina('/contato', ATUALIZADO_EM, 0.8),
    pagina('/blog', ATUALIZADO_EM, 0.6),
    ...artigos.map((a) => pagina(`/blog/${a.slug}`, a.atualizadoEm, 0.6)),
  ];
}
