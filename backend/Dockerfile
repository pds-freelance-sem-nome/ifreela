FROM node:22-bookworm

RUN apt-get update && apt-get install -y git sudo

RUN yarn global add @nestjs/cli
RUN corepack enable

RUN usermod -aG sudo node

RUN echo "node ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/node

USER node

WORKDIR /home/node/app

COPY --chown=node:node package.json yarn.lock* ./

RUN yarn install --frozen-lockfile

COPY --chown=node:node . .

RUN yarn build

EXPOSE 8080

CMD ["yarn", "start:prod"]
