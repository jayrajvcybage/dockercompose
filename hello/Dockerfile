#FROM node:10
FROM node:latest as node
WORKDIR /app
COPY . . 
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=node /app/dist/hello /usr/share/nginx/html
COPY --from=node /app/nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]