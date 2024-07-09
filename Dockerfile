# Use the official Node.js 18 image as the base image
FROM node:18.17.0

# Install postgresql-client
RUN apt-get update && apt-get install -y postgresql-client

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 4000

# Command to run the application
CMD ["npm", "start"]
