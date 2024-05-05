# Use a Node.js base image with version 18 to build the React app
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use an Nginx base image
FROM nginx:latest

# Copy the custom nginx.conf file to the Nginx configuration directory
COPY dockerConfig/myreact.nginx.conf /etc/nginx/nginx.conf

# Copy the built React app from the build stage to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
