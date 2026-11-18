# Google Ads — Implante com carga imediata

Este é o guia oficial da campanha. Ele junta o plano da agência (planilha de
novembro de 2026) com as correções necessárias para funcionar. Se algo aqui
contradisser outro material, **vale este documento**.

- **Landing page (LP):** `https://www.dramicheleherreira.com/lp/implante-carga-imediata`
- **Conta do Google Ads:** ID de conversão `AW-18581404442`
- **Tag instalada no site:** Google Tag Manager `GTM-K6FRHJCM`
- **WhatsApp da clínica:** (11) 99144-4710
- **Roteiro de atendimento:** `docs/roteiro-whatsapp-carga-imediata.md`

---

## 1. Quem faz o quê

| Quem | Responsabilidade |
|---|---|
| **Clínica (você e a Dra.)** | Adicionar a forma de pagamento no Google Ads, definir a verba diária e o CPC máximo, aprovar os textos dos anúncios, confirmar a autorização por escrito do Sr. Cícero e treinar a equipe com o roteiro do WhatsApp. |
| **Agência** | Configurar as conversões no Tag Manager e no Google Ads (seção 3), criar e subir a campanha (seções 4 a 7), revisar toda semana (seção 9). |
| **Site** | Já está pronto. A LP envia os eventos de conversão sozinha. **Não é preciso colocar nenhum código novo no site.** |

---

## 2. Como o funil funciona

```
Pesquisa no Google → anúncio → LP
                                ├─ Formulário (4 perguntas) → abre o WhatsApp com a mensagem pronta
                                └─ Botão "Falar direto no WhatsApp" → abre o WhatsApp com mensagem curta
                                                        ↓
                                 Equipe responde (meta: até 5 min) → agenda a avaliação
```

A LP tem dois caminhos de propósito, porque cada paciente prefere um:

- **Formulário:** a mensagem já chega com nome, situação, unidade e urgência. É o
  lead mais qualificado.
- **WhatsApp direto:** para quem prefere conversar antes. Chega a mensagem
  "Olá! Vim pelo anúncio do Google e gostaria de saber mais sobre o implante com
  carga imediata."

Os dois caminhos aparecem lado a lado em todas as chamadas da página e na barra
fixa do celular. As duas mensagens dizem "anúncio do Google", e é assim que a
equipe sabe que o contato veio da campanha.

---

## 3. Conversões — como configurar do jeito certo

### 3.1 O que a LP já envia

A cada ação, a página registra um evento no `dataLayer` do Tag Manager:

| Evento | Quando acontece | Dados enviados |
|---|---|---|
| `lp_formulario_envio` | O paciente enviou o formulário completo | `situacao`, `unidade`, `prazo` |
| `lp_whatsapp_clique` | O paciente clicou num botão de WhatsApp direto | `posicao` (`topo`, `hero`, `tudo-em-um-dia`, `carga-imediata`, `doutora`, `formulario`, `barra-fixa`) |

### 3.2 O que NÃO fazer

| Gatilho errado | Por que está errado |
|---|---|
| Clique no botão "Quero agendar minha avaliação" | São 6 botões com esse texto, e todos só **rolam a página até o formulário**. Cada rolagem viraria um lead falso. |
| Clique em link que contém `wa.me` | O formulário abre o WhatsApp por script, sem clique em link. **O lead mais importante não seria contado.** |
| Envio de formulário automático do Google (`gtm.formSubmit` ou eventos automáticos) | O formulário não é enviado da forma comum (ele abre o WhatsApp), então esse gatilho não dispara. |
| Colocar código de conversão no site **e** configurar no Tag Manager | Cada lead seria contado **duas vezes**. Use só o Tag Manager. |

### 3.3 Passo a passo (agência)

**No Google Ads** (Metas → Conversões → + Nova ação de conversão → Site →
Adicionar manualmente), crie duas ações:

| Nome | Categoria | Valor | Contagem | Janela | Meta |
|---|---|---|---|---|---|
| Lead – Formulário LP | Enviar formulário de lead | Não usar | Uma | 30 dias | **Principal** |
| Lead – WhatsApp LP | Contato | Não usar | Uma | 30 dias | **Principal** |

As duas são principais porque as duas abrem uma conversa real com a clínica.
Ficam separadas para os relatórios mostrarem qual caminho traz mais pacientes.
As **chamadas pelo anúncio** (recurso de ligação) ficam como **secundárias**,
só para acompanhar.

Anote o **ID** (`18581404442`) e o **rótulo** de cada ação.

**No Tag Manager** (tagmanager.google.com, contêiner `GTM-K6FRHJCM`):

1. **Variáveis → Nova → Variável da camada de dados:** crie `situacao`,
   `unidade`, `prazo` e `posicao`. São opcionais e servem para os relatórios.
2. **Acionadores → Novo → Evento personalizado:**
   - "LP – Formulário": nome do evento `lp_formulario_envio`
   - "LP – WhatsApp": nome do evento `lp_whatsapp_clique`
3. **Tags → Nova:**
   - **Vinculador de conversões**, com acionador *All Pages*. Ele guarda o clique do
     anúncio para atribuir a conversão.
   - **Acompanhamento de conversões do Google Ads**, com o ID e o rótulo de
     "Lead – Formulário LP" e acionador "LP – Formulário".
   - **Acompanhamento de conversões do Google Ads**, com o ID e o rótulo de
     "Lead – WhatsApp LP" e acionador "LP – WhatsApp".
4. **Testar:** clique em **Visualizar**, abra a LP, envie o formulário de teste
   e clique num botão de WhatsApp. No Tag Assistant devem aparecer os eventos
   `lp_formulario_envio` e `lp_whatsapp_clique`, cada um disparando a sua tag.
5. **Enviar** para publicar o contêiner. Em até 24 h o Google Ads mostra
   **Gravando conversões**.

> O Tag Manager carrega logo depois que a página aparece, para não deixar a LP
> lenta no celular. Os eventos que acontecem antes disso ficam guardados e são
> enviados assim que ele carrega. Nenhuma conversão se perde.

---

## 4. Estrutura da campanha

**Comece só com a campanha de Implantes.**

| Campanha | Grupo de anúncios | Status |
|---|---|---|
| `[micheleherreira] Search Implantes - Suzano e Ferraz - Novembro 2026` | Carga Imediata e Protocolo | **Ativar** |
| | Implante Suzano e Ferraz | **Ativar** |
| `[micheleherreira] Search Protese Flexivel - Suzano e Ferraz - Novembro 2026` | Prótese Flexível · Dentadura Solta e Prótese | **Pausada** |

**Por que a de prótese flexível fica pausada:** a LP fala só de implante e carga
imediata. Quem pesquisa "prótese flexível" e cai nela não encontra o que buscou,
e isso derruba a conversão e o Índice de Qualidade (o clique fica mais caro).
Ela só deve ser ligada quando existir uma página própria para prótese flexível,
e depois de a Dra. confirmar que oferece esse tratamento.

As palavras-chave e as negativas estão nas abas **Kws** e **Negativas** da
planilha da agência e podem ser importadas como estão:

- **Palavras-chave:** só correspondência **exata** e **de frase**, sem ampla.
- **Negativas cruzadas:** a campanha de Implantes nega "flexível" e "removível";
  a de Prótese nega "implante", "carga imediata" e "protocolo". **Manter**, para
  uma campanha não roubar a busca da outra.

---

## 5. Configurações da campanha

| Item | Configuração |
|---|---|
| Rede | **Só Rede de Pesquisa.** Desmarcar Parceiros de pesquisa e Rede de Display. |
| Lance | **Maximizar cliques** com **CPC máximo** (valor definido pela clínica). Depois de 15 a 30 conversões, mudar para **Maximizar conversões** (seção 9). |
| Verba diária | Definida pela clínica. |
| Recursos automáticos | **Desligar:** AI Max para Pesquisa, recursos criados automaticamente (inclui expansão de URL final), expansão de público e aplicação automática de recomendações. |
| Local | Suzano e Ferraz de Vasconcelos, com um raio ao redor de cada unidade (validar com a Dra.). Opção **Presença: pessoas que estão ou estiveram regularmente nos locais**, não "interesse". |
| Idade | Sugestão da agência: excluir 18 a 24 e 25 a 34 anos. Validar com a Dra. |
| Horário | No começo, só no horário em que a equipe responde o WhatsApp (seg. a sex., 9h às 18h, ou o horário real da equipe). Lead de anúncio esfria em minutos. Ampliar depois, se a equipe conseguir responder fora do horário. |
| **URL final** | `https://www.dramicheleherreira.com/lp/implante-carga-imediata` **sem `#formulario`** |
| Sufixo do URL final | `utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_term={keyword}` |

**Por que a URL final não pode ter `#formulario`:** com a âncora, o paciente cai
direto no formulário e pula a foto do Sr. Cícero, o vídeo, o "tudo em um único
dia" e as dúvidas. Essa é justamente a parte que convence quem nunca ouviu falar
da clínica. A página já tem botões que levam ao formulário em todas as seções.

---

## 6. Anúncios

Use os textos da aba **Anúncios Nov-26 (aprovação Dra)**, com estas trocas. Três
títulos soam como promessa de resultado, o que o CFO não permite:

| Título original | Trocar por |
|---|---|
| Saia Sorrindo da Cirurgia | **Provisório Fixo no Mesmo Dia** |
| Sem Meses sem Dente | **Avaliação com a Dra. Michele** |
| Perdeu Dente? Resolva Agora | **Perdeu Dente? Agende Avaliação** |

Os outros títulos e descrições estão de acordo com as regras:

- "Dentes Fixos no Mesmo Dia" está aprovado, porque as descrições sempre trazem a
  ressalva "se o caso permitir" ou "quando indicado". **Não remova essas ressalvas.**
- "Avaliação Sem Compromisso" está aprovado: "sem compromisso" não é o mesmo que
  grátis.

**A Dra. precisa aprovar cada texto** (coluna "Aprovado?") antes de a campanha
ir ao ar.

---

## 7. Recursos (extensões)

| Recurso | Conteúdo |
|---|---|
| Sitelinks | **Agendar Avaliação** → `…/lp/implante-carga-imediata#formulario` · **Casos Reais** → `…#depoimento` · **Dúvidas Frequentes** → `…#perguntas` · **Falar com a Clínica** → `…#avaliacao` |
| Frases de destaque | Carga Imediata · Avaliação Sem Compromisso · 25 Anos de Experiência · Suzano e Ferraz · Atendimento no WhatsApp |
| Snippet de serviços | Implante Dentário · Carga Imediata · Prótese Protocolo. **"Prótese Flexível" só entra quando a campanha de prótese for ligada.** |
| Chamada | (11) 99144-4710, como conversão **secundária** |
| Local | Vincular o Perfil da Empresa no Google das duas unidades |

Nos **sitelinks** as âncoras estão certas, porque quem clica num sitelink escolheu
ir direto àquela parte. Só a **URL final** do anúncio fica sem âncora.

---

## 8. Checklist antes de ligar a campanha

- [ ] Forma de pagamento adicionada no Google Ads (a conta mostra **saldo esgotado**)
- [ ] Verba diária e CPC máximo definidos pela clínica
- [ ] Dra. aprovou os textos, com as 3 trocas da seção 6
- [ ] As duas conversões da seção 3 criadas, testadas no modo Visualizar e o contêiner publicado
- [ ] URL final sem `#formulario`
- [ ] Campanha de prótese flexível **pausada**
- [ ] Recursos automáticos desligados (seção 5)
- [ ] Equipe treinada com o `roteiro-whatsapp-carga-imediata.md`, com mensagem de ausência e etiquetas configuradas no WhatsApp Business
- [ ] Autorização por escrito do Sr. Cícero (nome, foto e vídeo) arquivada na clínica

---

## 9. Depois que ligar

**Primeira semana, a cada 2 ou 3 dias:**

- Ler o relatório **Termos de pesquisa** e negativar o que não tem intenção de
  tratamento.
- Conferir se as conversões estão sendo gravadas, comparando com as mensagens
  "anúncio do Google" que chegaram no WhatsApp.
- Ver o CTR de cada anúncio e pausar títulos com desempenho muito abaixo dos outros.

**Toda semana:**

| Métrica | Referência |
|---|---|
| Taxa de conversão da LP (leads ÷ cliques) | 5 a 10% é bom. Abaixo de 3%, revisar termos de pesquisa e anúncios. |
| Custo por lead | Acompanhar a tendência. Deve cair conforme as negativas forem entrando. |
| Leads → avaliações → tratamentos | Contar pelas etiquetas do WhatsApp (`Google Ads`, `Agendou`, `Compareceu`, `Fechou`). Esse é o número que diz se a campanha dá retorno. |

**Troca de lance:** com 15 a 30 conversões em um mês, mudar de *Maximizar
cliques* para *Maximizar conversões*. Mais tarde, se o custo estabilizar, para
*CPA desejado*.

**Próximas campanhas** (aba Dicas): implante unitário, prótese sobre implante,
enxerto ósseo, reabilitação oral e prótese fixa. Cada uma idealmente com a sua
própria página de destino.

---

## 10. Sobre o teste de velocidade da LP

- **SEO 69 no PageSpeed é esperado.** A LP é `noindex` de propósito, para não
  competir no Google com a página `/carga-imediata` do site. O PageSpeed tira
  pontos de SEO por isso, mas não afeta o Google Ads.
- **"NO_LCP"** foi um erro do teste feito antes das melhorias de velocidade.
  Depois delas (18/11/2026), a LP marca 71 a 75 de desempenho no celular, com o
  primeiro conteúdo na tela em cerca de 1,1 s.

---

## 11. Regras do CFO para os anúncios (Código de Ética, art. 44)

**Avaliação paga:** a avaliação custa R$ 50, descontados do tratamento se o
paciente fechar. **Nunca** use "grátis", "gratuita", "sem custo" nem o valor da
consulta nos anúncios. O CFO proíbe anunciar preço e serviço gratuito, e
anunciar como grátis algo que é cobrado viola a política de declarações
enganosas do Google Ads. Quem explica o valor é a equipe, no WhatsApp.

Também é proibido:

- **Preço, desconto, parcelamento ou "promoção"** como chamariz.
- **Promessa de resultado:** "garantido", "sem dor", "o melhor", "resolva agora".
- **Anúncio sem a responsável técnica:** os anúncios precisam do nome e do CRO
  (Dra. Michele Herreira, CRO-SP 71275). O CRO já aparece na LP.
- **Fotos e vídeos de pacientes sem autorização por escrito.**
