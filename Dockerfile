FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .
CMD ["npm", "run", "build"]

CMD ["npm", "run", "start:dev"]