# 1. For build React app
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy frontend
COPY frontend/ ./frontend/
RUN cd frontend && npm install && npm run build

# 2. For Nginx setup
FROM nginx:alpine

# Copy nginx
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=build /app/build .

# Expose port 80
EXPOSE 80

# 3. Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
