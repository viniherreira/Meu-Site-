import Link from 'next/link';
import { MapPin, Navigation, TrainFront } from 'lucide-react';
import { ENDERECO_LINHA, MAPS_ROTA } from '@/lib/contato';

const cidades = [
  {
    nome: 'Suzano',
    texto:
      'A clínica fica no Centro de Suzano, na Rua Portugal Freixo. Para quem mora na cidade, a região central concentra as linhas de ônibus municipais e a Estação Suzano da CPTM.',
  },
  {
    nome: 'Mogi das Cruzes',
    texto:
      'Pacientes de Mogi das Cruzes chegam pela Linha 11-Coral da CPTM, descendo na Estação Suzano, ou de carro pelas ligações rodoviárias entre as duas cidades.',
  },
  {
    nome: 'Ferraz de Vasconcelos',
    texto:
      'Ferraz de Vasconcelos fica na mesma Linha 11-Coral, a poucas estações de Suzano — uma opção prática para quem prefere evitar o trânsito.',
  },
  {
    nome: 'Poá',
    texto:
      'De Poá, o trajeto até o Centro de Suzano é curto, de trem (Linha 11-Coral) ou de carro. Tratamentos com várias sessões ficam mais fáceis de encaixar na rotina.',
  },
];

/**
 * Seção de SEO local: diz ao paciente (e ao Google) de onde vêm os pacientes e
 * como chegar. Só traz informação verificável — nada de "a 5 minutos de".
 */
export default function AreaAtendida() {
  return (
    <section id="area-atendida" className="section-py bg-white">
      <div className="container-main">
        <div className="max-w-2xl">
          <span className="section-badge mb-5">Atendimento no Alto Tietê</span>
          <h2 className="section-heading text-4xl lg:text-5xl">
            Atendemos pacientes de Suzano, Mogi das Cruzes, Ferraz de Vasconcelos e Poá
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            Se você procurou por &ldquo;dentista perto de mim&rdquo; em alguma cidade do
            Alto Tietê, a clínica odontológica da Dra. Michele Herreira fica em{' '}
            {ENDERECO_LINHA}. Tratamentos como implante e prótese pedem alguns retornos,
            então vale considerar o trajeto antes de começar — abaixo, o acesso a partir
            de cada cidade.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {cidades.map((c) => (
            <div key={c.nome} className="border-t border-border pt-5">
              <h3 className="flex items-center gap-2 font-cormorant text-2xl text-dark">
                <MapPin size={16} className="text-gold-dark" aria-hidden="true" />
                Dentista para quem vem de {c.nome}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{c.texto}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-xl border border-border bg-cream p-6
                        sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-3 text-sm leading-relaxed text-muted">
            <TrainFront size={18} className="mt-0.5 shrink-0 text-gold-dark" aria-hidden="true" />
            Combine o horário pelo WhatsApp: assim dá para planejar o trajeto e evitar
            espera, principalmente em consultas de cirurgia.
          </p>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={MAPS_ROTA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline py-3"
            >
              <Navigation size={15} aria-hidden="true" />
              Como chegar
            </a>
            <Link href="/contato" className="btn-primary py-3">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
