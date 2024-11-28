# Use an official Node.js image to build the frontend
FROM node:22.11.0-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
# COPY package.json ./
# RUN npm install

# Copy the rest of the application code and build it
COPY . .

# Run the application
RUN npm run build
