# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies separately (better caching)
COPY package*.json ./
RUN npm install  --include=dev

# Copy rest of the project
COPY . .

# Expose Next.js default port
EXPOSE 3000

# Default command (overridden by docker-compose for dev)
CMD ["npm", "run", "dev"]
