# Google Ads — Implante com carga imediata

Landing page: `https://www.dramicheleherreira.com/lp/implante-carga-imediata`

A página é `noindex` (não aparece no Google orgânico, para não competir com
`/carga-imediata`) e não tem o menu do site. Tudo nela leva a um de dois caminhos:
o formulário de avaliação (lead já qualificado) ou o WhatsApp direto, para quem
prefere conversar antes. Os dois aparecem lado a lado em todas as chamadas e na barra
fixa do celular.

## 1. Conversões (direto no Google Ads, sem configurar o Tag Manager)

**Você não precisa configurar o Google Tag Manager.** A tag `GTM-K6FRHJCM` já está
no site e já envia as visitas para o Google Ads (conta de conversão
`AW-18581404442`). Para contar os leads, basta criar as conversões no Google Ads;
o disparo de cada uma é colocado no código do site.

### Passo a passo (feito por você, no Google Ads)

1. **Metas → Conversões → + Nova ação de conversão → Site.**
2. Se pedir para escanear, use `dramicheleherreira.com`. Depois escolha
   **Adicionar uma ação de conversão manualmente**.
3. Crie a primeira:
   - Nome: **Lead formulário carga imediata**
   - Categoria: **Enviar formulário de lead**
   - Valor: **Não usar um valor** · Contagem: **Uma**
   - Ação **principal** (é a que o Google usa para otimizar os lances)
4. Crie a segunda:
   - Nome: **Clique WhatsApp LP**
   - Categoria: **Contato**
   - Valor: **Não usar um valor** · Contagem: **Uma**
   - Ação **secundária** (só para relatório; assim o Google não otimiza para
     cliques curiosos)
5. Em cada uma, na tela de instalação, escolha **Configurar a tag você mesmo**
   (ou **Usar o snippet de evento**). Aparece um código com
   `send_to: 'AW-18581404442/XXXXXXXXXXX'`.
6. **Mande esse código das duas conversões para quem cuida do site.** Ele é
   colocado no formulário e nos botões de WhatsApp, testado e publicado.

Depois de publicado, em até 24 h o Google Ads mostra o status **Gravando
conversões**.

### O que o site já envia (referência técnica)

A página registra dois eventos no `dataLayer`:

| Evento | Quando | Parâmetros |
|---|---|---|
| `lp_formulario_envio` | Enviou o formulário (lead qualificado) | `situacao`, `unidade`, `prazo` |
| `lp_whatsapp_clique` | Clicou em um botão de WhatsApp direto (sem formulário) | `posicao` (`topo`, `hero`, `tudo-em-um-dia`, `carga-imediata`, `doutora`, `formulario`, `barra-fixa`) |

### Alternativa: pelo Tag Manager (só se alguém já usa o GTM)

Dá o mesmo resultado, com mais passos. Em tagmanager.google.com, contêiner
`GTM-K6FRHJCM`: crie acionadores de **Evento personalizado** com os nomes
`lp_formulario_envio` e `lp_whatsapp_clique`, uma tag **Acompanhamento de
conversões do Google Ads** para cada um (com o ID e o rótulo do passo 5) e uma
tag **Vinculador de conversões** em *All Pages*. Teste no modo **Visualizar** e
clique em **Enviar** para publicar. **Não use os dois caminhos ao mesmo tempo**,
senão cada lead é contado duas vezes.

## 2. Campanha sugerida

- **Tipo:** Pesquisa (não Performance Max no começo — com pouca verba, Pesquisa
  dá controle sobre os termos e traz lead mais qualificado).
- **Local:** Suzano, Ferraz de Vasconcelos, Mogi das Cruzes, Poá e
  Itaquaquecetuba, com "Presença: pessoas que estão ou estiveram regularmente
  nos locais" (não "interesse").
- **Programação:** todos os dias; o formulário funciona fora do horário, e a
  equipe responde no dia seguinte.
- **Lances:** começar com *Maximizar cliques* com CPC máximo por 2–3 semanas;
  quando tiver ~15–30 conversões de formulário, trocar para *Maximizar
  conversões* (ou CPA desejado).
- **URL final:** a LP acima. Modelo de acompanhamento (opcional):
  `{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign=carga-imediata&utm_term={keyword}`

### Palavras-chave (correspondência de frase ou exata)

- "implante carga imediata", [implante carga imediata suzano]
- "dente fixo no mesmo dia", "implante dentário no mesmo dia"
- "implante dentário suzano", "implante dentário ferraz de vasconcelos"
- "protocolo dentário", "trocar dentadura por implante", "dentadura fixa"
- "implante dentário mogi das cruzes"

### Palavras negativas (adicionar desde o primeiro dia)

grátis, gratuito, SUS, faculdade, curso, preço de custo, como fazer, emprego,
vaga, auxiliar, técnico, mercado livre, dentadura barata, implante capilar,
implante de silicone, cachorro, veterinário, pdf, o que é

### Anúncio responsivo — títulos (até 30 caracteres)

- Implante Carga Imediata
- Dentes Fixos no Mesmo Dia*
- Agende sua Avaliação
- Implantes em Suzano e Ferraz
- 25+ Anos em Implantodontia
- Planejamento com Tomografia
- Agende pelo WhatsApp
- Troque a Dentadura por Fixo

\* O Google aceita, mas a descrição deve deixar claro "em casos indicados"
(regra do CFO e boa prática para não gerar expectativa errada).

### Descrições (até 90 caracteres)

- Em casos indicados, você sai com dentes provisórios fixos no mesmo dia. Agende.
- Avaliação em Suzano e Ferraz. Plano com prazo e valor antes de começar.
- Dra. Michele Herreira, CRO-SP 71275. Mais de 25 anos em implantes e reabilitação.

### Recursos

- **Local:** vincular o Perfil da Empresa no Google (as duas unidades).
- **Ligação/WhatsApp:** (11) 99144-4710.
- **Sitelinks:** Depoimento em vídeo (`#depoimento`), Dúvidas (`#perguntas`),
  Agendar avaliação (`#formulario`) — todos para a LP com a âncora.
- **Imagens:** foto da doutora e o antes/depois de carga imediata (já
  autorizados para o site).

## 3. Regras do CFO (lembrar ao escrever anúncios)

A avaliação é paga (o valor é abatido do tratamento se o paciente fechar): **não** use "grátis", "sem custo" nem o valor da consulta nos anúncios — o art. 44 do Código de Ética proíbe anunciar preço e serviço gratuito, e anunciar algo como grátis e cobrar depois também viola a política de declarações enganosas do Google Ads. Quem explica o valor e o abatimento é a equipe, no WhatsApp.

Sem preço ou "promoção" como chamariz, sem promessa de resultado ("garantido",
"sem dor", "o melhor"), sempre com nome e CRO da responsável técnica, e casos
de pacientes só com autorização por escrito.

## 4. O que acompanhar

- Taxa de conversão da LP (formulários ÷ cliques). Referência para saúde:
  5–10% é bom; abaixo de 3%, revisar termos de pesquisa e anúncio.
- Relatório **Termos de pesquisa** toda semana nas primeiras semanas:
  negativar o que não tem intenção de tratamento.
- Na clínica: marcar quais mensagens do WhatsApp vieram "pelo anúncio do Google"
  (a mensagem já chega com essa frase) e quantas viraram avaliação e tratamento.
