'use client';

import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import WhatsAppIcon from '../WhatsAppIcon';
import LinkWhatsApp from './LinkWhatsApp';

/**
 * Barra fixa do celular com os dois caminhos: WhatsApp direto (para quem quer só
 * conversar) e o formulário de avaliação (o lead chega qualificado). Some enquanto o
 * formulário está na tela, para não cobrir os campos nem o botão de enviar.
 */
export default function BarraFixaCelular({ alvo, whatsapp }: { alvo: string; whatsapp: string }) {
  const [formularioNaTela, setFormularioNaTela] = useState(false);

  useEffect(() => {
    const el = document.getElementById(alvo);
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setFormularioNaTela(e.isIntersecting), {
      rootMargin: '0px 0px -10% 0px',
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [alvo]);

  const fora = formularioNaTela ? -1 : 0;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-cream p-3
                  pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 lg:hidden ${
                    formularioNaTela ? 'translate-y-full' : 'translate-y-0'
                  }`}
      aria-hidden={formularioNaTela}
    >
      <LinkWhatsApp
        href={whatsapp}
        posicao="barra-fixa"
        tabIndex={fora}
        className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-2 py-3.5 text-[14px] font-semibold
                   text-white shadow-lg shadow-black/10 active:scale-[0.99]"
      >
        <WhatsAppIcon size={18} />
        WhatsApp
      </LinkWhatsApp>
      <a
        href={`#${alvo}`}
        tabIndex={fora}
        className="flex items-center justify-center gap-1.5 rounded-full bg-dark px-2 py-3.5 text-[14px] font-semibold
                   text-white shadow-lg shadow-black/10 active:scale-[0.99]"
      >
        Agendar avaliação
        <ArrowDown size={16} aria-hidden="true" />
      </a>
    </div>
  );
}
