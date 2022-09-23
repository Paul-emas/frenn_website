
FROM node:17-alpine as node

WORKDIR /usr/src/app

COPY . .

RUN npm install

# COPY . .

RUN npm run build

# Stage 2
FROM nginx:1.15.2-alpine

COPY --from=node /usr/src/app/dist/angular-test   /var/www
# COPY --from=node /usr/src/app/src/index.html  /var/www
# COPY --from=node /usr/src/app/src/main.ts  /var/www
# COPY --from=node /usr/src/app/src//polyfills.ts  /var/www
# COPY --from=node /usr/src/app/src/tsconfig.app.json /var/www

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

ENTRYPOINT ["nginx","-g","daemon off;"]





# FROM node:latest as reference

# WORKDIR /src

# COPY . .

# RUN npm install

# RUN npm run build 

# # stage 2

# FROM nginx:1.15.2-alpine AS build
 
# COPY --from=reference /src/dist/ /var/www
# # COPY --from=reference /app/dist/src  /var/www


# COPY nginx.conf /etc/nginx/nginx.conf


# EXPOSE 8080

# ENTRYPOINT ["nginx","-g","daemon off;"]



# # Stage 1

# FROM node:10-alpine as build-step


# RUN mkdir -p /app

# WORKDIR /app

# COPY package.json /app

# RUN npm install

# COPY . /app

# RUN npm run build --prod

 

# # Stage 2

# FROM nginx:1.17.1-alpine

