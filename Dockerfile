# build stage
FROM node:lts-alpine as build-stage

RUN npm install -g npm@9.7.1

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY . /app
RUN npm install
RUN npm run build

# production stage

FROM nginxinc/nginx-unprivileged:alpine-slim

ARG UID=101
USER root
RUN rm /etc/nginx/conf.d/default.conf
RUN rm /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
COPY nginx/ /etc/nginx/conf.d/

COPY --from=build-stage /app/dist /usr/share/nginx/html

USER $UID

EXPOSE 8080


#CMD ["nginx", "-g", "daemon off;"]