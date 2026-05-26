'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const WA_LINK =
  'https://wa.me/5511991444710?text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Dra.%20Michele.';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 2.4 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { value: '500+', label: 'Pacientes' },
  { value: '10+', label: 'Anos de Experiência' },
  { value: '98%', label: 'Satisfação' },
];

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-cream"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[70vw] h-[70vh] bg-gradient-radial from-gold/6 via-gold/2 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gradient-radial from-gold/4 via-transparent to-transparent" />
      </div>

      {/* Decorative line top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-gold/20 pointer-events-none" />

      <div className="container-main relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 xl:gap-16 items-center min-h-screen pt-24 pb-16">

          {/* Left – Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ y: textY }}
            className="space-y-8 lg:space-y-10"
          >
            {/* Badge */}
            <motion.div variants={item}>
              <span className="section-badge">
                CRO-SP 71275 · Especialista em Estética Oral
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={item}>
              <h1 className="font-cormorant font-light leading-[0.93] tracking-[-0.02em] text-dark"
                  style={{ fontSize: 'clamp(3.2rem, 7vw, 6.5rem)' }}>
                <span className="block">Transformamos</span>
                <span className="block">sorrisos em</span>
                <span className="block italic text-gold">autoestima.</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="font-sans text-muted text-lg leading-relaxed max-w-md"
            >
              Tecnologia avançada, precisão clínica e atendimento genuinamente
              humanizado para a transformação que você merece.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <WhatsAppIcon />
                Agendar pelo WhatsApp
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
              <a href="#resultados" className="btn-outline">
                Ver Resultados
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="flex items-center gap-8 pt-6 border-t border-dark/8"
            >
              {stats.map((s, i) => (
                <div key={s.label}>
                  <div className="font-cormorant text-3xl font-medium text-dark leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="font-sans text-xs text-muted tracking-wide">{s.label}</div>
                  {i < stats.length - 1 && (
                    <div className="hidden" />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 2.6 }}
            style={{ y: imgY }}
            className="relative flex items-center justify-center"
          >
            {/* Decorative rings */}
            <div className="absolute w-[110%] aspect-square rounded-full border border-gold/10 animate-spin-slow pointer-events-none" />
            <div className="absolute w-[90%] aspect-square rounded-full border border-gold/15 pointer-events-none" />
            <div className="absolute w-[70%] aspect-square rounded-full border border-gold/8 pointer-events-none" />

            {/* Gold glow behind photo */}
            <div className="absolute inset-[10%] rounded-[2.5rem] bg-gradient-radial from-gold/20 via-gold/5 to-transparent blur-2xl pointer-events-none" />

            {/* Doctor photo */}
            <div className="relative z-10 w-[85%] max-w-sm aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/img/img-dra.jpeg"
                alt="Dra. Michele Herreira – Especialista em Estética Oral"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 90vw, 450px"
              />
              {/* Subtle overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark/20 to-transparent" />
            </div>

            {/* Floating card – CRO */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-8 -left-4 lg:-left-8 glass rounded-2xl px-5 py-4 shadow-xl z-20"
            >
              <p className="font-sans text-xs text-muted tracking-wider uppercase mb-1">Registro</p>
              <p className="font-cormorant text-2xl font-medium text-dark leading-none">CRO-SP</p>
              <p className="font-sans text-sm text-gold font-medium">71275</p>
            </motion.div>

            {/* Floating card – rating */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute bottom-12 -right-4 lg:-right-6 glass rounded-2xl px-5 py-4 shadow-xl z-20"
            >
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="font-cormorant text-2xl font-medium text-dark leading-none">98%</p>
              <p className="font-sans text-xs text-muted">Satisfação</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-sans text-xs text-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
