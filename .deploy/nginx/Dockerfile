FROM nginx:1.21.6

RUN rm /etc/nginx/conf.d/*

COPY configs/templates/default.conf /etc/nginx/conf.d/default.conf
COPY configs/nginx.conf /etc/nginx/nginx.conf

RUN touch /var/run/nginx.pid && \
  chown -R www-data:www-data /var/run/nginx.pid && \
  chown -R www-data:www-data /var/cache/nginx && \
  chown -R www-data:www-data /etc/nginx && \
  chown -R www-data:www-data /var/log

USER www-data

CMD [ "nginx", "-g", "daemon off;" ]
