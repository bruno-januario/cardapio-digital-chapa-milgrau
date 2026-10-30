# 🍔 Cardápio Digital | Chapa Milgrau

Cardápio digital desenvolvido como **projeto freelance real** para a Chapa Milgrau, um comércio local de comida de rua presente há mais de duas décadas no bairro Valverde, Nova Iguaçu — RJ.

O projeto apresenta os produtos da Chapa Milgrau em uma página única, organizada para facilitar a consulta pelo celular ou computador. O cardápio reúne **lanches, sopas e bebidas**, com preços e descrições dos itens.

<p align="center">
  <img src="public/images/logo.webp" alt="Logo da Chapa Milgrau" width="240" />
</p>

<p align="center">
  <a href="https://bruno-januario.github.io/cardapio-digital-chapa-milgrau/"><strong>ACESSAR PROJETO ONLINE</strong></a>
</p>

---

## ✨ Funcionalidades

- 🧭 Navegação por links diretos para cada categoria.
- 🍔 Cards de produtos com imagens e preços.
- 📝 Janela modal com a descrição do produto selecionado.
- 🥣 Preços das sopas apresentados por tamanho: P, M, G e GG.
- 📱 Layout responsivo para dispositivos móveis e telas maiores.
- ⬆️ Botão para voltar ao início da página.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Estrutura e conteúdo da página |
| CSS3 | Estilização e layout responsivo |
| TypeScript | Dados, renderização do cardápio e interações |
| Vite | Servidor de desenvolvimento e build de produção |

O projeto também utiliza fontes do Google Fonts e ícones do Font Awesome.

---

## ⚙️ Como funciona

O conteúdo dos produtos — nomes, descrições, imagens e preços — é organizado em `src/data.ts`. Na inicialização, `src/main.ts` usa esses dados para montar os cards nas seções de lanches, sopas e bebidas.

O visitante pode navegar pelas categorias usando os links do cabeçalho. Ao selecionar um card, uma janela modal exibe a descrição correspondente; nas sopas, os preços dos tamanhos são apresentados em um resumo visual. O layout se adapta a diferentes larguras de tela.

---

## 📂 Estrutura de pastas do projeto

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml       # Publicação no GitHub Pages
├── docs/                    # Documentação e referências visuais
├── public/
│   ├── images/
│   │   ├── beverages/       # Imagens das bebidas
│   │   ├── fast-food/       # Imagens dos lanches
│   │   ├── soups/           # Imagens das sopas
│   │   ├── header-bg-*.jpg  # Fundos do cabeçalho
│   │   └── logo.webp        # Logo do estabelecimento
│   └── favicon.ico
├── src/
│   ├── styles/              # Folhas de estilo por seção
│   ├── data.ts              # Produtos e preços
│   ├── listeners.ts         # Interações da interface
│   └── main.ts              # Inicialização e renderização
├── index.html               # Página principal
├── package.json             # Dependências e comandos
├── tsconfig.json            # Configuração do TypeScript
└── vite.config.ts           # Configuração do Vite
```

---

## 🚀 Como executar localmente

**Pré-requisitos:** [Node.js](https://nodejs.org/) e npm instalados.

1. Clone o repositório e entre na pasta do projeto:

   ```bash
   git clone https://github.com/bruno-januario/cardapio-digital-chapa-milgrau.git
   cd cardapio-digital-chapa-milgrau
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor local:

   ```bash
   npm run dev
   ```

   Abra no navegador o endereço local exibido pelo Vite.

Para validar ou gerar a versão de produção, use `npm run build`. Para visualizar o build localmente, execute `npm run preview`.

---

## 👨‍💻 Autor

  Desenvolvido por [Bruno Janúario](https://www.linkedin.com/in/dev-bruno-januario).
