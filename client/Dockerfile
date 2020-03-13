FROM node:alpine AS builder
WORKDIR /app
COPY ./package*.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY ./ ./
RUN yarn build

FROM nginx:latest
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
