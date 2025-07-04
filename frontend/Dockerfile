FROM node:20

WORKDIR /app

COPY package*.json ./
RUN test -d node_modules || npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
