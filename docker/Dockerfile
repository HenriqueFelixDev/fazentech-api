FROM node:12.19.0
LABEL mantainer="henriquefelixdev@gmail.com"
COPY package*.json ./
COPY knexfile.js .
RUN mkdir app
COPY app app
EXPOSE 80
RUN npm install
ENTRYPOINT ["npm", "start"]
