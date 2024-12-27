# Base stage - Common dependencies
FROM node:18-alpine AS base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./

# Builder stage - Builds the application
FROM base AS builder
COPY . . 
RUN npm ci
RUN npm run build

# Production stage - Runs the built app in production mode
FROM node:18-alpine AS production
WORKDIR /app

# Environment setup
ENV NODE_ENV=production
ENV PORT=3000 

# Install only production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Expose the default port
EXPOSE $PORT

# Start the Next.js application in production mode
CMD ["npm", "start"]
