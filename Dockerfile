# build stage
FROM node:lts-alpine as build-stage

RUN npm install -g npm@9.7.1

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . /app
RUN npm install
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]