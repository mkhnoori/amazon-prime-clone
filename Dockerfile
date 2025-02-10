# Stage 1: Build the React application
FROM node:18-alpine as builder

WORKDIR /app

# Copy the frontend project
COPY frontend/package*.json ./
RUN npm install

COPY frontend/ .

# Build the React app
RUN npm run build

# Stage 2: NGINX for serving the build
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
