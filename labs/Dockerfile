# Use the official Node.js image with alpine version 9.4.0
FROM node:9.4.0-alpine

# Copy the necessary files into the container
COPY app.js .
COPY package.json .

# Install dependencies and update the apk package manager
RUN npm install && \
    apk update && \
    apk upgrade

# Expose port 8080 for incoming connections
EXPOSE 8080

# Specify the command to run when the container starts
CMD ["node", "app.js"]
