FROM node:lts-alpine3.10
ENV NODE_ENV=production
ENV HOSTNAME=
ENV DEV_MODE=
ENV PROFILE_MODE=
ENV PORT=3000
ENV PHP_URI=http://phpback
ENV HOME /opt/app
WORKDIR $HOME
COPY . $HOME
RUN ["npm", "install"]
EXPOSE 3000
ENTRYPOINT ["node", "mynodeapp.js"]
