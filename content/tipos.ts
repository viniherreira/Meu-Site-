import type { Pergunta } from '@/lib/seo';

export type Imagem = { src: string; alt: string; width: number; height: number };

export type Secao = {
  titulo: string;
  paragrafos: string[];
  lista?: string[];
};

export type Tratamento = {
  slug: string;
  /** Nome em texto corrido: "Implante dentário". */
  nome: string;
  /** Nome no title, com iniciais maiúsculas: "Implante Dentário". */
  nomeTitle: string;
  /** Até 155 caracteres, com benefício, cidade e "Avaliação sem custo". */
  description: string;
  /** Resumo de uma ou duas frases para o card da home. */
  resumo: string;
  /** Primeiro(s) parágrafo(s), logo abaixo do H1. */
  intro: string[];
  imagem: Imagem;
  secoes: Secao[];
  faq: Pergunta[];
  /** ids de `casos` (comparador) e `casosMontados` (lib/casos.ts). */
  casos?: string[];
  casosMontados?: string[];
  relacionados: string[];
  /** slug do artigo do blog sobre o tema, se houver. */
  artigo?: string;
  /** Como o tratamento é citado na mensagem do WhatsApp. */
  mensagem: string;
  procedimento: {
    naoInvasivo: boolean;
    comoE: string;
    acompanhamento: string;
  };
  atualizadoEm: string;
};

export type Artigo = {
  slug: string;
  titulo: string;
  /** Title da aba, sem o sufixo do site. */
  tituloSeo: string;
  description: string;
  resumo: string;
  publicadoEm: string;
  atualizadoEm: string;
  imagem: Imagem;
  /** slug do tratamento relacionado. */
  tratamento: string;
  intro: string[];
  secoes: Secao[];
};
