# Ismael Flores - Prisma Template
## Requerimientos
* NodeJS v10.+
* Yarn v1.21.+
* Docker v19.03.13

## Instalar
Algunos de estos comandos son instalados por el Dockerfile
$ yarn install
$ npm install

## 23/10/2021 Updates Models
- .env
- prima/models/cinema.prisma
- prima/models/movie.prisma
- prima/models/ticket.prisma
- src/resolvers/mutations/cinemas.ts
- src/resolvers/mutations/movies.ts
- src/resolvers/mutations/tickets.ts
- src/resolvers/mutations/user.ts
- src/resolvers/Query/cinemas.ts
- src/resolvers/Query/movies.ts
- src/resolvers/Query/tickets.ts
- src/resolvers/Query/user.ts
- dockerignore (Todo lo que va a ignorar docker)
- Dockerfile  (Plantilla para nuestro contenedos necesaria para que se ejecute nuestro comando $ docker build para construir nuestra imagen)
## Configuracion de entorno

## Comandos docker
- $ docker build
- $ docker ps -a
- $ docker run -p
- $ docker tag
- $ docker push
- $ docker stop containerId
- $ docker restart containerId
- $ docker images
- $ docker images rm imageID

## Comandos git
- $ git init
- $ git remote add origin https://github.com/Scanfritz/prismagraphql.git
- $ git remote -v
- $ git remote set-url origin
- $ git push -u master