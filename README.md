# Autenticação JWT com React e NodeJS

Este projeto utiliza o [Create React App](https://github.com/facebook/create-react-app), NodeJS Express e o banco de dados PostegreSQL com Docker.

## Instalação
Você precisará ter o [NodeJS](https://nodejs.org) instalado na sua máquina, e, após isso, clonar este repositório: [https://github.com/aans2/loginExample.git]


Depois disso, instale as dependências do Front-end e do Back-end:
```sh
  $ cd Login/backend && npm install
  $ cd Login/frontend && npm install
```
Instalar o [Docker](https://docs.docker.com/engine/install/) e [Docker-Compose](https://docs.docker.com/engine/install/)

## Para subir o banco

Acesse a pasta do backend e execute o arquivo [docker-compose.yml] com o comando:
```sh
  $ sudo docker-compose up
```

Para cirar as tabelas do banco, execute:
```sh
  $ npm run typeorm migration:run
```

Depois execute o backend, com o comando:
```sh
  $ npm run dev
```

Agora acesse a pasta do front-end e execute:
```sh
  $ npm start
```
