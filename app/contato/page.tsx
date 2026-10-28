import { Clock, Instagram, Mail, MapPin, Navigation, Phone } from 'lucide-react';
import PageShell from '@/components/PageShell';
import Breadcrumb from '@/components/Breadcrumb';
import AreaAtendida from '@/components/AreaAtendida';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import {
  CRO,
  EMAIL,
  ENDERECO_LINHA,
  HORARIO,
  INSTAGRAM,
  MAPS_EMBED,
  MAPS_ROTA,
  NOME_CLINICA,
  TELEFONE,
  TELEFONE_EXIBICAO,
  WA_AGENDAR,
} from '@/lib/contato';
import { metadataPagina } from '@/lib/seo';

export const metadata = metadataPagina({
  title: 'Contato e Endereço em Suzano',
  description:
    'Endereço, WhatsApp e horário da clínica da Dra. Michele Herreira no Centro de Suzano, com mapa e rota para chegar. Avaliação sem custo.',
  path: '/contato',
});

const canais = [
  { icone: MapPin, rotulo: 'Endereço', valor: ENDERECO_LINHA, href: MAPS_ROTA, externo: true },
  { icone: Phone, rotulo: 'Telefone e WhatsApp', valor: TELEFONE_EXIBICAO, href: `tel:${TELEFONE}` },
  { icone: Clock, rotulo: 'Horário', valor: HORARIO },
  { icone: Mail, rotulo: 'E-mail', valor: EMAIL, href: `mailto:${EMAIL}` },
  { icone: Instagram, rotulo: 'Instagram', valor: '@dra.michele_', href: INSTAGRAM, externo: true },
];

export default function ContatoPage() {
  return (
    <PageShell>
      <header className="bg-cream">
        <div className="container-main pb-14 pt-28 lg:pt-32">
          <Breadcrumb
            migalhas={[
              { nome: 'Início', path: '/' },
              { nome: 'Contato', path: '/contato' },
            ]}
          />
          <span className="section-badge mt-8">Contato</span>
          <h1
            className="section-heading mt-5 max-w-3xl text-balance"
            style={{ fontSize: 'clamp(2.4rem, 4.6vw, 3.9rem)' }}
          >
            Contato e como chegar à clínica em Suzano
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            A forma mais rápida de agendar é pelo WhatsApp. A avaliação não tem custo e serve
            para examinar o caso e apresentar as opções de tratamento com prazo e valor.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WA_AGENDAR} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WhatsAppIcon size={17} />
              Agendar pelo WhatsApp
            </a>
            <a href={MAPS_ROTA} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <Navigation size={15} aria-hidden="true" />
              Como chegar
            </a>
          </div>
        </div>
      </header>

      <section className="section-py bg-white">
        <div className="container-main grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="section-heading text-3xl lg:text-[2.4rem]">{NOME_CLINICA}</h2>
            <p className="mt-2 text-sm text-muted">{CRO}</p>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {canais.map((c) => {
                const Icone = c.icone;
                const conteudo = (
                  <>
                    <Icone size={17} className="mt-0.5 shrink-0 text-gold-dark" aria-hidden="true" />
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-muted">{c.rotulo}</span>
                      <span className="mt-1 block text-[15px] text-dark">{c.valor}</span>
                    </span>
                  </>
                );
                return (
                  <li key={c.rotulo}>
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.externo && { target: '_blank', rel: 'noopener noreferrer' })}
                        className="flex items-start gap-4 py-4 transition-colors hover:text-gold-deep"
                      >
                        {conteudo}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 py-4">{conteudo}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            {/* loading="lazy": o mapa só carrega quando chega perto da tela, sem pesar no LCP. */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-dark/5 ring-1 ring-dark/10">
              <iframe
                src={MAPS_EMBED}
                title={`Mapa com a localização da clínica: ${ENDERECO_LINHA}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
              />
            </div>
            <a
              href={MAPS_ROTA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5 w-full sm:w-auto"
            >
              <Navigation size={15} aria-hidden="true" />
              Como chegar (abre o Google Maps)
            </a>
          </div>
        </div>
      </section>

      <AreaAtendida />
    </PageShell>
  );
}
