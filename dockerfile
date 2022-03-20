FROM cypress/base:14
WORKDIR /app

COPY package.json .
COPY package-lock.json .

ENV CI=1
RUN npm ci

RUN npx cypress verify