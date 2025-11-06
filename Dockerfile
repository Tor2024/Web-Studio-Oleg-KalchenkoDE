FROM node:20-slim

# Install python3 and build dependencies for native modules
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY .npmrc ./

# Clean and install dependencies
RUN rm -rf node_modules package-lock.json && npm install --omit=dev --omit=optional

# Copy source code
COPY . .

# Build the application
ENV ROLLUP_USE_NATIVE_MODULES=false
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
