# ECOLETA
[![Banner](https://github.com/FabianoPretoJr/nlw-01/blob/master/web/src/assets/banner.png?raw=true "Banner")](https://github.com/FabianoPretoJr/nlw-01/blob/master/web/src/assets/banner.png?raw=true "Banner")

## Sobre o projeto

Ecoleta - é uma forma de conectar empresas e entidades de coleta de resíduos orgânicos e inorgânicos as pessoas que precisam descartar seus resíduos de maneira ecológica.

As empresas ou entidades poderão se cadastrar na plataforma web enviando:

- uma imagem do ponto de coleta
- nome da entidade, email e whatsapp
- e o endereço para que ele possa aparecer no mapa
- além de selecionar um ou mais ítens de coleta:
1. lâmpadas
2. pilhas e baterias
3. papéis e papelão
4. resíduos eletrônicos
5. resíduos orgânicos
6. óleo de cozinha

- Os usuários terão acesso ao aplicativo móvel, onde poderão:

1. navegar pelo mapa para ver as instituições cadastradas
2. entrar em contato com a entidade através do E-mail ou do WhatsApp

Projeto desenvolvido durante a NLW - Next Level Week oferecida pela Rocketseat. O NLW é uma experiência online com muito conteúdo prático, desafios e hacks onde o conteúdo fica disponível durante uma semana.

#### Tecnologias

- Node.js
- TypeScript
- React
- React Native
- Expo

## Como executar o projeto
A aplicação é dividida em 3 partes, o web, mobile e server.  Para executar os frontends web e mobile é necessário sempre estar rodando o server.

### Pré-requisitos

Você deverá ter instalado em sua máquina o Node.js, Git e um editor de código como o VS Code. [Acesse esse guia de instação.](https://www.notion.so/Instala-o-Pr-Requisitos-19cb7f2846f5469d9b259837303176c8 "Acesse esse guia de instação.")

#### Rodar o server
Clone este repositório
$ git clone https://github.com/FabianoPretoJr/nlw-01.git

Acesse a pasta do projeto no terminal/cmd
$ cd nlw-01

Vá para a pasta server
$ cd server

Instale as dependências
$ npm install

Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

O servidor inciará na porta:3333 - acesse http://localhost:3333 

#### Rodar frontend web
Clone este repositório
$ git clone https://github.com/FabianoPretoJr/nlw-01.git

Acesse a pasta do projeto no seu terminal/cmd
$ cd nlw-01

Vá para a pasta da aplicação Front End
$ cd web

Instale as dependências
$ npm install

Execute a aplicação em modo de desenvolvimento
$ npm run start

A aplicação será aberta na porta:3000 - acesse http://localhost:3000

#### Rodar o frontend mobile
Clone este repositório
$ git clone https://github.com/FabianoPretoJr/nlw-01.git

Acesse a pasta do projeto no seu terminal/cmd
$ cd nlw-01

Vá para a pasta da aplicação Front End
$ cd mobile

Instale as dependências
$ npm install

Execute a aplicação em modo de desenvolvimento
$ npm start

Abrirá uma página na web, você deve instalar em seu smartphone o app do Expo para ler o QR code gerado nela. Pode se usar emuladores android ou IOS. É fundamental que o smartphone usado esteja na mesma rede wi-fi que o computador.
