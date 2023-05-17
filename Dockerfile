FROM  node:13.12.0-alpine
WORKDIR /app
COPY ./package.json ./package.json
COPY .  ./
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "development"]
