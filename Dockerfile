FROM node:8.11.2-alpine

MAINTAINER Michał Jamrożek <michal@mtronix.pl>

# Create workdir and copy package.json frlo local filesystem to container
RUN mkdir -p /app
WORKDIR /app
ADD package.json /app/

# Install dependencies and process manager (PM2)
RUN npm install
RUN npm install -g pm2
RUN npm run build

# Copy rest of application files to container
COPY . /app/

EXPOSE 3000

# Start application with configuration from processes.json
CMD ["pm2", "start", "processes.json", "--no-daemon"]