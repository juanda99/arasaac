FROM node:wheezy

#Create app directory
RUN mkdir -p /usr/src/app
VOLUME /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
#COPY . /usr/src/app
# el resto de ficheros los pasaremos por el volumen
EXPOSE 3000

CMD [ "npm", "start" ]
