'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Phone } from 'lucide-react';

const WA_LINK =
  'https://wa.me/5511991444710?text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Dra.%20Michele.';

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="section-py bg-dark overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-gold/8 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-gold/5 to-transparent" />
      </div>

      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(192,154,92,1) 1px, transparent 1px), linear-gradient(90deg, rgba(192,154,92,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-gold text-xs font-sans tracking-[0.25em] uppercase mb-8">
              <span className="w-8 h-px bg-gold" />
              Comece sua transformação
              <span className="w-8 h-px bg-gold" />
            </span>

            <h2 className="font-cormorant font-light text-white leading-[0.95] mb-8"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}>
              Pronto para transformar
              <br />
              <span className="italic text-gold">seu sorriso?</span>
            </h2>

            <p className="font-sans text-white/50 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              Agende sua avaliação gratuita e descubra como podemos
              devolver sua autoestima com tecnologia, precisão e
              atendimento que você merece.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gold text-white
                         font-sans font-semibold rounded-full hover:bg-gold-dark transition-all duration-300
                         shadow-2xl shadow-gold/20 text-lg"
            >
              <WhatsAppIcon />
              Agendar pelo WhatsApp
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>

            <a
              href="tel:+5511991444710"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/15
                         text-white font-sans font-medium rounded-full hover:border-white/30
                         hover:bg-white/5 transition-all duration-300 text-lg"
            >
              <Phone size={18} />
              (11) 99144-4710
            </a>
          </motion.div>

          {/* Info chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/40"
          >
            <div className="flex items-center gap-2 font-sans text-sm">
              <MapPin size={14} className="text-gold/60" />
              São Paulo, SP
            </div>
            <div className="w-px h-4 bg-white/15" />
            <div className="flex items-center gap-2 font-sans text-sm">
              <Clock size={14} className="text-gold/60" />
              Seg – Sex, 9h às 18h
            </div>
            <div className="w-px h-4 bg-white/15" />
            <div className="flex items-center gap-2 font-sans text-sm">
              <span className="text-gold/60">★</span>
              Avaliação gratuita
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
