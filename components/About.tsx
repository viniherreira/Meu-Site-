'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Award, GraduationCap, Users } from 'lucide-react';

const WA_LINK =
  'https://wa.me/5511991444710?text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Dra.%20Michele.';

const credentials = [
  { icon: CheckCircle2, text: 'Especialista em Implantes Dentários' },
  { icon: CheckCircle2, text: 'Carga Imediata Certificada' },
  { icon: CheckCircle2, text: 'Lentes de Contato Dental' },
  { icon: CheckCircle2, text: 'Cirurgias Odontológicas' },
];

const badges = [
  { icon: Award, label: 'CRO-SP', value: '71275' },
  { icon: GraduationCap, label: 'Experiência', value: '25+ Anos' },
  { icon: Users, label: 'Pacientes', value: '1000+' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="sobre" ref={ref} className="section-py bg-cream overflow-hidden">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left – Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -top-6 -left-6 w-[calc(100%-40px)] h-[calc(100%-40px)] rounded-[2.5rem] border border-gold/20 pointer-events-none z-0" />

            {/* Main photo */}
            <div className="relative z-10 aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/img/atendendo.jpeg"
                alt="Dra. Michele Herreira atendendo paciente"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent" />
            </div>

            {/* Floating badge bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 left-8 right-8 glass rounded-2xl px-6 py-5 shadow-xl z-20"
            >
              <div className="flex items-center justify-between">
                {badges.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.label} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-cormorant text-xl font-medium text-dark leading-none">{b.value}</p>
                        <p className="font-sans text-xs text-muted mt-0.5">{b.label}</p>
                      </div>
                      {i < badges.length - 1 && (
                        <div className="w-px h-8 bg-border ml-3" />
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right – Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="pt-6 lg:pt-0"
          >
            <span className="section-badge mb-5 block">Conheça</span>
            <h2 className="section-heading text-5xl lg:text-6xl mb-8">
              Dra. Michele{' '}
              <span className="italic text-gold">Herreira</span>
            </h2>

            <div className="space-y-5 font-sans text-muted leading-relaxed">
              <p>
                Referência em odontologia estética e reabilitação oral, a{' '}
                <strong className="text-dark font-medium">Dra. Michele Herreira</strong> dedica cada
                consulta à transformação de sorrisos e à melhoria genuína da qualidade de vida de
                seus pacientes.
              </p>
              <p>
                Especializada em <strong className="text-dark font-medium">Implantes Dentários</strong>{' '}
                e <strong className="text-dark font-medium">Carga Imediata</strong>, ela combina
                expertise técnica com tecnologia digital de ponta para oferecer resultados
                excepcionais — previsíveis, seguros e completamente naturais.
              </p>
              <p>
                Com mais de 25 anos de experiência e atualização constante nas
                mais modernas técnicas, cada tratamento é planejado individualmente,
                garantindo que o resultado final supere sempre as expectativas do paciente.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {credentials.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <Icon size={18} className="text-gold flex-shrink-0" />
                    <span className="font-sans text-sm text-dark/80">{c.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Quote */}
            <div className="mt-10 border-l-2 border-gold pl-6">
              <p className="font-cormorant text-xl italic text-dark/70 leading-relaxed">
                "Cada sorriso transformado é uma história de autoestima
                e confiança que se renova."
              </p>
              <p className="font-sans text-sm text-muted mt-2">— Dra. Michele Herreira</p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Agendar Consulta
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
