'use client';

import Image from 'next/image';
import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';

const WA_LINK =
  'https://wa.me/5511991444710?text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Dra.%20Michele.';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Sobre a Doutora', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

const services = [
  'Implantes Dentários',
  'Carga Imediata',
  'Lentes de Contato Dental',
  'Estética Odontológica',
  'Clareamento Dental',
  'Cirurgias Odontológicas',
];

export default function Footer() {
  return (
    <footer id="contato" className="bg-dark border-t border-white/5">
      {/* Main footer */}
      <div className="container-main py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="relative w-44 h-10 mb-6">
              <Image
                src="/img/logo-nome.png"
                alt="Dra. Michele Herreira"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="font-sans text-sm text-white/40 leading-relaxed mb-6">
              Transformando vidas através de sorrisos. Excelência em
              odontologia estética e reabilitação oral.
            </p>
            <p className="font-sans text-xs text-white/25 mb-6">
              <strong className="text-white/40">CRO-SP:</strong> 71275
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/dra.michele_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
                           text-white/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com/dramicheleherreira"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
                           text-white/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
                           text-white/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs font-medium text-white/30 tracking-widest uppercase mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-xs font-medium text-white/30 tracking-widest uppercase mb-6">
              Especialidades
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="font-sans text-sm text-white/50">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-medium text-white/30 tracking-widest uppercase mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5511991444710"
                  className="flex items-start gap-3 text-white/50 hover:text-gold transition-colors duration-300 group"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0 group-hover:text-gold" />
                  <span className="font-sans text-sm">(11) 99144-4710</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:drmichele@gmail.com"
                  className="flex items-start gap-3 text-white/50 hover:text-gold transition-colors duration-300 group"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0 group-hover:text-gold" />
                  <span className="font-sans text-sm">drmichele@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                  <span className="font-sans text-sm">São Paulo, SP</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50">
                  <Clock size={15} className="mt-0.5 flex-shrink-0" />
                  <span className="font-sans text-sm leading-relaxed">
                    Segunda a Sexta<br />
                    9h às 18h
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/25">
            © 2025 Dra. Michele Herreira. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-white/20">
            CRO-SP 71275 · Odontologia Estética & Reabilitação Oral
          </p>
        </div>
      </div>
    </footer>
  );
}
