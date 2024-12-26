FROM node:hydrogen-alpine

WORKDIR /app

COPY . .
RUN npm install

RUN npm run build

# Use Nginx to serve the React app
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the port Nginx runs on
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
