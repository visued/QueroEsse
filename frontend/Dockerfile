FROM node:10.13-alpine
ENV NODE_ENV production

WORKDIR /usr/src/app

# Copy the package.json file into our app directory
COPY . /usr/src/app/

# Install any needed packages specified in package.json
RUN npm install

RUN ls /usr/src/app
RUN ls /usr/src/app/public

EXPOSE 3000

CMD npm start