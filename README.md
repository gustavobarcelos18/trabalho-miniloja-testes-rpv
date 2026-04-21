# Mini Loja

Projeto educacional em Next.js e TypeScript para praticar testes de front-end com Jest e Testing Library.

A aplicacao simula uma loja virtual simples com catalogo de produtos, carrinho e formulario de checkout. O foco principal nao e a complexidade de negocio, e sim oferecer uma base pequena, clara e realista para exercitar testes de componentes React.

## Objetivos do projeto

- Praticar escrita de testes unitarios e de integracao em interface.
- Exercitar queries semanticas e boas praticas da Testing Library.
- Validar interacoes do usuario com cliques, digitacao e envio de formulario.
- Trabalhar com mocks, assertions negativas e verificacao de callbacks.
- Servir como material de apoio para aulas e exercicios.

## O que a aplicacao cobre

Na versao atual, a mini-loja trabalha com tres fluxos principais:

- Listagem de produtos com disponibilidade e acao de compra.
- Carrinho com calculo de total e remocao de itens.
- Checkout com validacao de nome, e-mail e CEP.

Esses fluxos foram escolhidos para cobrir cenarios comuns de testes em front-end sem introduzir dependencias desnecessarias, API externa ou estado global complexo.

## Stack

- Next.js 14 com Pages Router.
- React 18.
- TypeScript.
- Jest 29.
- React Testing Library.
- Testing Library User Event.
- jsdom para ambiente de testes.

## Estrutura principal

```text
src/
  components/
    Cart/
    CheckoutForm/
    ProductCard/
  data/
    products.ts
  pages/
    index.tsx
  types/
    index.ts
docs/
  EXERCISES.md
  APOSTILA-TESTES.md
  TUTORIAL.md
```

Componentes e exercicios atuais:

- `ProductCard`: renderizacao de produto, disponibilidade e acao de adicionar ao carrinho.
- `Cart`: listagem de itens, remocao e calculo de total.
- `CheckoutForm`: formulario com validacao de campos.

## Como executar

Instale as dependencias:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Execute os testes uma vez:

```bash
npm run test
```

Execute os testes em modo watch:

```bash
npm run test:watch
```

Gere cobertura de testes:

```bash
npm run test:coverage
```

## Scripts disponiveis

| Script | Finalidade |
| --- | --- |
| `npm run dev` | sobe a aplicacao em ambiente de desenvolvimento |
| `npm run build` | gera a versao de producao |
| `npm run start` | inicia a aplicacao ja buildada |
| `npm run test` | executa a suite de testes |
| `npm run test:watch` | executa os testes em modo interativo |
| `npm run test:coverage` | gera relatorio de cobertura |

## Como usar este repositorio em aula ou estudo

Fluxo recomendado:

1. Rode `npm run test:watch`.
2. Leia as instrucoes em `docs/EXERCISES.md`.
3. Consulte `docs/APOSTILA-TESTES.md` para os conceitos principais.
4. Use `docs/TUTORIAL.md` como referencia para montar um projeto semelhante do zero.
5. Implemente ou ajuste os testes guiando-se pelo comportamento visivel da interface.

## Criterios pedagogicos

O projeto incentiva praticas alinhadas ao uso real da Testing Library:

- Preferir `getByRole` e `getByLabelText` quando possivel.
- Testar comportamento observavel, nao detalhes internos de implementacao.
- Usar `userEvent` para simular acoes do usuario.
- Evitar seletores frageis e excesso de acoplamento ao DOM.
- Escrever testes claros, pequenos e orientados ao comportamento.

## Materiais de apoio

- [docs/EXERCISES.md](./docs/EXERCISES.md): guia dos exercicios atuais e conceitos praticados.
- [docs/APOSTILA-TESTES.md](./docs/APOSTILA-TESTES.md): pequena apostila com os conceitos principais de testes de front-end com Jest e Testing Library.
- [docs/TUTORIAL.md](./docs/TUTORIAL.md): tutorial de configuracao base para criacao de um projeto inicial pronto para realizacao dos testes.

## Objetivo academico

Este repositorio foi estruturado para apoiar atividades de ensino com progressao de dificuldade. A aplicacao e propositalmente pequena para que a atencao fique nos testes, na leitura de interface e na qualidade das assertions, e nao em detalhes de infraestrutura.
