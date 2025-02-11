# Stage 1: Build the React application
FROM node:18-alpine as builder

WORKDIR /app

# Copy package.json and package-lock.json from root to the container's /app directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project (assuming src, public, etc. are at the root)
COPY . .

# Build the React app
RUN npm run build

# Stage 2: NGINX for serving the build
FROM nginx:stable-alpine

# Copy the build files from the builder image to the nginx server directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
