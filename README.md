# Cardápio Digital — Chapa Milgrau

Cardápio digital responsivo da Chapa Milgrau, comércio local de comida de rua localizado em Valverde, Nova Iguaçu — RJ.

> **Projeto freelance real:** desenvolvido para o comércio de lanches Chapa Milgrau, com o objetivo de apresentar o cardápio do estabelecimento de forma prática e acessível via QR Code.

## Acesso ao projeto

**Link:** _a ser adicionado posteriormente._

<!-- Insira aqui o link público do projeto quando estiver disponível. -->

## Funcionalidades

- Navegação por âncoras entre as categorias do cardápio.
- Exibição de lanches, sopas e bebidas em cards.
- Descrição dos produtos em uma janela modal.
- Layout responsivo para diferentes tamanhos de tela.
- Preços exibidos em reais, incluindo opções de tamanhos para as sopas.

## Tecnologias

- HTML5
- CSS3
- TypeScript
- Vite

## Executar localmente

### Pré-requisitos

- Node.js e npm instalados.

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador.

### Build de produção

```bash
npm run build
```

Os arquivos gerados ficam na pasta `dist/`.

### Pré-visualizar o build

```bash
npm run preview
```

## Estrutura do projeto

```text
├── public/
│   └── images/       # Imagens estáticas do cardápio e de estilização
├── src/
│   ├── styles/       # Estilos da página
│   ├── data.ts       # Dados dos produtos e preços
│   ├── listeners.ts  # Interações da janela modal
│   └── main.ts       # Inicialização e renderização do cardápio
├── index.html        # Estrutura principal da página
├── package.json      # Scripts e dependências
└── tsconfig.json     # Configuração do TypeScript
```

## Categorias do cardápio

- **Lanches**
- **Sopas**
- **Bebidas**

Os produtos, descrições e preços são definidos em `src/data.ts`.

## Créditos

Desenvolvido por [Bruno Januário](https://www.linkedin.com/in/dev-bruno-januario) para a Chapa Milgrau.
