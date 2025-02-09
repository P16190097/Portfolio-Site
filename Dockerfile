FROM node:20.11.1-alpine3.18
# RUN apt-get update && apt-get install -y <list of packages>
RUN apk add --no-cache \
    make g++ && \
    apk add vips-dev fftw-dev --update-cache \
    && rm -fR /var/cache/apk/*

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# RUN npm install -g gatsby-cli
RUN npm install

COPY gatsby-config.ts .
# If you are building your code for production
# RUN npm ci --only=production
# RUN npm run build

# Bundle app source
COPY . .

EXPOSE 8080
CMD npm run serve-prod