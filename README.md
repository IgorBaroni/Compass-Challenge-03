# Compass-Challenge-03

Terceiro desafio do programa de estágio Front-End com React e AWS da Compass UOL.<br>
Do período de execução de 22/07 a 05/08.<br>
Onde o objetivo principal foi aplicar tudo o que foi aprendido até então, e demonstrar suas habilidades.

## Sobre o desafio

O desafio foi o desenvolvimento de um site para uma loja de móveis fictícia 'Furniro'.

A parte visual do site foi feita a partir de um projeto base no Figma, que foi disponibilizado aos estagiários. Lá tivemos acesso ao design das telas, imagens, componentes e textos.

O site contém sete páginas, são elas:

- Home Page
- Shop Page
- Product Item Page
- Contact Page
- Login Page
- Cart Page
- Checkout Page

### Home Page

A Home Page é a página inicial, onde está todas as informações sobre a empresa, uma prévias de seus produtos, e links de suas redes sociais. Existe também um campo de texto na parte inferior, onde o usuário pode inserir seu email para se inscrever ao boletim de notícias da empresa.

### Shop Page

A Shop Page mostra ao usuário todos os produtos da loja, e existe alguns filtros para o usuário utilizar, são eles um filtro de categoria de produto, um filtro de número de produtos que deve ser mostrado na página e um filtro de ordenação dos produtos.

### Product Item Page

A Product Item Page é a página que mostra ao usuário determinado produto, ela é aberta quando um usuário clica no card de algum produto. Ela visa trazer todas as informações do produto selecionado, tais como preço, imagens, descrições, cores, entre outros.

### Contact Page

A Contact Page é a página que informa ao usuário algumas informações e meios de contato com a empresa, como endereço, números de telefone e o horário de expediente. Nessa tela você pode informar dados em alguns campos de texto a fim de enviar uma mensagem a empresa.

### Cart Page

A Cart Page informa ao usuário os seus produtos que estão no carrinho, a quantidade de cada um e seus respectivos preços. Informa também a soma total dos produtos.

### Checkout Page

A Checkout Page é a página que mostra ao usuário a quantidade de produtos que o usuário colocou em sua compra e o preço total da compra, e também mostra alguns campos de texto que o usuário deve preencher com seus dados, tais como endereço, nome, etc. Ela é uma rota protegida, dessa forma apenas usuários logados podem entrar nela.

## Tecnologias

O projeto foi desenvolvido com React + TypeScript e diversas bibliotecas/frameworks do react, como exemplo: tailwindcss, redux, json-server, etc.

## Instruções de Uso

Para executar o projeto localmente, siga os passos a seguir:

#### Clone o repositório:

```cmd
    git clone https://github.com/IgorBaroni/Compass-Challenge-03.git
```

#### Navegue até o diretório raíz do projeto:

```cmd
  cd furniro-app
```

#### Instale as depêndencias do projeto:

```cmd
  npm install
```

#### Rode o comando para abrir servidor de desenvolvimento:

```cmd
  npm run dev
```

#### Em outro terminal, rode o comando para iniciar o json-server (Para trazer os dados dos produtos):

```cmd
  npm run jsonsv
```

### No projeto também foram desenvolvidos testes unitários dos componentes com a utilização do Jest e o React Testing Library

#### Para realizar os testes rode o comando a seguir (É necessário que o json-server esteja rodando também):

```cmd
  npm run test
```
