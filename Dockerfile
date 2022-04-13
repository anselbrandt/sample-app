FROM node:16

WORKDIR /usr/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn
COPY . ./
RUN yarn build

ENV NODE_ENV production
ENV PORT 4000

EXPOSE 4000
CMD [ "node", "dist/index.js" ]