FROM node:slim AS react
WORKDIR /react
COPY react_frontend/package.json ./
RUN npm install --omit=dev
COPY react_frontend/public ./public
COPY react_frontend/src ./src
RUN npm run build

FROM dzdia_django_backend AS django

FROM nginx
WORKDIR /etc/nginx
COPY nginx/conf/nginx.conf nginx.conf
COPY --from=react /react/build /var/www
COPY --from=django /django/static /var/www/static