FROM node:16-alpine as builder

WORKDIR /app

# Copy package files and install dependencies
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy the frontend source code and build it
COPY frontend/ .
RUN npm run build

# Stage 2: Nginx to serve the built files
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

