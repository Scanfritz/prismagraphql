FROM node:14-alpine

USER node

RUN mkdir -p /home/node/isflores-prisma

COPY --chown=node package.json $[WORKDIR]

WORKDIR /home/node/isflores-prisma

COPY --chown=node . .
#!COPY --chown=node . ${WORKDIR}

RUN npm install

ENV PORT=3000

EXPOSE ${PORT}

CMD ["npm", "start"]