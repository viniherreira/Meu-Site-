/**
 * Dados de contato num lugar só. Antes o número e o link do WhatsApp estavam
 * repetidos em seis componentes — trocar o telefone exigia caçar todos.
 */
export const TELEFONE = '+5511991444710';
export const TELEFONE_EXIBICAO = '(11) 99144-4710';
export const EMAIL = 'drmichele@gmail.com';
export const CIDADE = 'São Paulo, SP';
export const HORARIO = 'Segunda a sexta, 9h às 18h';
export const CRO = 'CRO-SP 71275';

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
