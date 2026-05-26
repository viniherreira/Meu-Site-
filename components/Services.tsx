'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Zap, Sparkles, Star, Sun, Stethoscope, ArrowUpRight } from 'lucide-react';

const WA_LINK =
  'https://wa.me/5511991444710?text=Ol%C3%A1!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20os%20tratamentos.';

const services = [
  {
    icon: Shield,
    title: 'Implantes Dentários',
    description:
      'Reabilitação definitiva com osseointegração precisa. Resultados naturais, seguros e duradouros para toda a vida.',
    tag: 'Mais procurado',
  },
  {
    icon: Zap,
    title: 'Carga Imediata',
    description:
      'Dentes fixos no mesmo dia da cirurgia. Tecnologia avançada que elimina a espera e devolve o sorriso em horas.',
    tag: null,
  },
  {
    icon: Sparkles,
    title: 'Lentes de Contato Dental',
    description:
      'Transformação estética com mínimo desgaste. Facetas ultrafinas que entregam sorriso perfeito e natural.',
    tag: null,
  },
  {
    icon: Star,
    title: 'Estética Odontológica',
    description:
      'Harmonize e embeleze seu sorriso com planejamento digital preciso. Cada detalhe pensado para o resultado ideal.',
    tag: null,
  },
  {
    icon: Sun,
    title: 'Clareamento Dental',
    description:
      'Clareza e brilho naturais com técnicas profissionais seguras. Até 8 tons mais claro com conforto total.',
    tag: null,
  },
  {
    icon: Stethoscope,
    title: 'Cirurgias Odontológicas',
    description:
      'Procedimentos cirúrgicos com planejamento 3D e alta precisão. Recuperação rápida e conforto pós-operatório.',
    tag: null,
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="tratamentos" ref={ref} className="section-py bg-cream">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-badge justify-center mb-5">Especialidades</span>
          <h2 className="section-heading text-5xl lg:text-6xl mb-6">
            Nossos <span className="italic text-gold">Tratamentos</span>
          </h2>
          <p className="font-sans text-muted max-w-xl mx-auto leading-relaxed">
            Soluções completas em saúde, função e estética — do primeiro sorriso
            ao resultado que transforma vidas.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white rounded-4xl p-8 border border-border
                           hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5
                           transition-all duration-500 flex flex-col"
              >
                {/* Tag */}
                {service.tag && (
                  <span className="absolute top-6 right-6 text-xs font-sans font-medium text-gold
                                   bg-gold/10 px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                )}

                {/* Icon */}
                <div className="mb-6 w-14 h-14 rounded-2xl bg-dark/4 flex items-center justify-center
                                group-hover:bg-gold/10 transition-colors duration-400">
                  <Icon size={24} className="text-dark/60 group-hover:text-gold transition-colors duration-400" />
                </div>

                <h3 className="font-cormorant text-2xl font-medium text-dark mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-muted leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* CTA link */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-sans font-medium text-dark/50
                             group-hover:text-gold transition-colors duration-300"
                >
                  Saiba mais
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="font-sans text-muted mb-6">
            Não encontrou o que procura? Entre em contato e tire suas dúvidas.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Consultar pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
