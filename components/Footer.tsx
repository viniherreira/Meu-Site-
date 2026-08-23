import Image from 'next/image';
import { Clock, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import {
  CIDADE,
  CRO,
  EMAIL,
  HORARIO,
  INSTAGRAM,
  TELEFONE,
  TELEFONE_EXIBICAO,
  WA_AGENDAR,
} from '@/lib/contato';

const navegacao = [
  { label: 'Início', href: '#inicio' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Crianças', href: '#odontopediatria' },
  { label: 'A doutora', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

const especialidades = [
  'Implantes dentários',
  'Carga imediata',
  'Lentes de contato dental',
  'Estética do sorriso',
  'Odontopediatria',
  'Prevenção infantil',
];

export default function Footer() {
  return (
    <footer id="contato" className="bg-dark">
      <div className="container-main py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/img/logo-nome.png"
              alt="Dra. Michele Herreira"
              width={168}
              height={38}
              className="h-9 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Odontologia com foco em implantes e reabilitação oral.
            </p>
            <p className="mt-4 text-sm text-white/55">{CRO}</p>

            <div className="mt-6 flex gap-2.5">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Dra. Michele Herreira"
                className="flex h-10 w-10 items-center justify-center rounded-full border
                           border-white/20 text-white/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram size={16} />
              </a>
              <a
                href={WA_AGENDAR}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da clínica"
                className="flex h-10 w-10 items-center justify-center rounded-full border
                           border-white/20 text-white/70 transition-colors hover:border-gold hover:text-gold"
              >
                <WhatsAppIcon size={16} />
              </a>
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-xs uppercase tracking-[0.18em] text-white/55">Navegação</h2>
            <ul className="mt-5 space-y-3">
              {navegacao.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-block py-1 text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-white/55">Especialidades</h2>
            <ul className="mt-5 space-y-3">
              {especialidades.map((e) => (
                <li key={e} className="text-sm text-white/70">
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-white/55">Contato</h2>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li>
                <a
                  href={`tel:${TELEFONE}`}
                  className="flex items-start gap-3 py-1 transition-colors hover:text-gold"
                >
                  <Phone size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {TELEFONE_EXIBICAO}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 break-all py-1 transition-colors hover:text-gold"
                >
                  <Mail size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                {CIDADE}
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                {HORARIO}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-main flex flex-col items-center justify-between gap-3 py-6
                        text-xs text-white/55 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Dra. Michele Herreira. Todos os direitos reservados.
          </p>
          <p>{CRO} &middot; Odontologia e reabilitação oral</p>
        </div>
      </div>
    </footer>
  );
}
