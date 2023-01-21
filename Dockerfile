FROM node:18-alpine

RUN mkdir app
COPY . ./app
WORKDIR /app/

RUN yarn install

CMD ["yarn", "start"]
