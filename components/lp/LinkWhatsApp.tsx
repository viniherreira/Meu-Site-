'use client';

import { registrarConversao } from '@/lib/conversao';

type Props = {
  href: string;
  /** Onde o botão está na página — vai no evento, para saber qual converte mais. */
  posicao: string;
  className?: string;
  tabIndex?: number;
  children: React.ReactNode;
};

/** Link de WhatsApp que registra o clique como conversão antes de abrir o app. */
export default function LinkWhatsApp({ href, posicao, className, tabIndex, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => registrarConversao({ event: 'lp_whatsapp_clique', posicao })}
      className={className}
      tabIndex={tabIndex}
    >
      {children}
    </a>
  );
}
