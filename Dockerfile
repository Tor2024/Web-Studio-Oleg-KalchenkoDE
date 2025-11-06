FROM node:20-slim

# Install python3 and build dependencies for native modules
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev --omit=optional

# Copy source code
COPY . .

# Build the application
ENV ROLLUP_SKIP_NODE_BUILTINS=true
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
