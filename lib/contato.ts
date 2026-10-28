/**
 * Dados de contato num lugar só. Antes o número e o link do WhatsApp estavam
 * repetidos em seis componentes — trocar o telefone exigia caçar todos.
 *
 * Nome, endereço e telefone (NAP) precisam sair idênticos no rodapé, no schema
 * e no Google Meu Negócio. Qualquer mudança de endereço é feita só aqui.
 */
export const SITE_URL = 'https://www.dramicheleherreira.com';

export const NOME = 'Dra. Michele Herreira';
export const NOME_CLINICA = 'Dra. Michele Herreira — Odontologia';

export const TELEFONE = '+5511991444710';
export const TELEFONE_EXIBICAO = '(11) 99144-4710';
export const EMAIL = 'drmichele@gmail.com';
export const HORARIO = 'Segunda a sexta, 9h às 18h';
export const CRO = 'CRO-SP 71275';

export const ENDERECO = {
  rua: 'Rua Portugal Freixo, 25',
  bairro: 'Centro',
  cidade: 'Suzano',
  uf: 'SP',
  cep: '08674-170',
};
export const ENDERECO_LINHA = `${ENDERECO.rua} — ${ENDERECO.bairro}, ${ENDERECO.cidade} - ${ENDERECO.uf}, ${ENDERECO.cep}`;
export const CIDADE = `${ENDERECO.cidade}, ${ENDERECO.uf}`;

/** Coordenadas da Rua Portugal Freixo (OpenStreetMap). Conferir com o pino do Google Meu Negócio. */
export const GEO = { lat: -23.539006, lng: -46.3121365 };

export const CIDADES_ATENDIDAS = ['Suzano', 'Mogi das Cruzes', 'Ferraz de Vasconcelos', 'Poá'];

const enderecoTexto = `${ENDERECO.rua}, ${ENDERECO.bairro}, ${ENDERECO.cidade} - ${ENDERECO.uf}, ${ENDERECO.cep}`;
const enderecoBusca = encodeURIComponent(enderecoTexto);
// Formato final do embed do Google Maps (sem chave de API). O atalho
// /maps?q=...&output=embed redireciona para cá, e a resposta do redirecionamento
// vem com X-Frame-Options: SAMEORIGIN — apontar direto evita o problema.
export const MAPS_EMBED = `https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1s${enderecoTexto.replace(/ /g, '+')}`;
export const MAPS_ROTA = `https://www.google.com/maps/dir/?api=1&destination=${enderecoBusca}`;

export const INSTAGRAM = 'https://www.instagram.com/dra.michele_/';
export const FACEBOOK = 'https://facebook.com/dramicheleherreira';

function whatsapp(mensagem: string) {
  return `https://wa.me/${TELEFONE.replace('+', '')}?text=${encodeURIComponent(mensagem)}`;
}

export const WA_AGENDAR = whatsapp(
  'Olá! Vim pelo site e gostaria de agendar uma avaliação com a Dra. Michele.'
);

export const WA_TRATAMENTOS = whatsapp(
  'Olá! Vim pelo site e gostaria de saber mais sobre os tratamentos.'
);

export function waSobreTratamento(tratamento: string) {
  return whatsapp(`Olá! Vim pelo site e gostaria de saber mais sobre ${tratamento}.`);
}

export function waAvaliacaoTratamento(tratamento: string) {
  return whatsapp(
    `Olá! Vim pelo site e gostaria de agendar uma avaliação para ${tratamento} com a Dra. Michele.`
  );
}
