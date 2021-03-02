FROM nginx:1.19.7-alpine

EXPOSE 8081

ADD ./nginx.conf /etc/nginx/conf.d/default.conf
ADD ./css /var/www/css
ADD ./img /var/www/img
ADD ./js /var/www/js
ADD ./index.html /var/www/index.html
