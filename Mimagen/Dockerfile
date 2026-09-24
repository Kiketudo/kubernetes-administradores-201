# Use the official lightweight Node.js image
FROM node

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY index.js /app/index.js
USER 1000
# Install dependencies (use 'npm ci' for clean installs in production)
#RUN npm ci --only=production

# Copy the rest of your application code
#COPY . .

# Expose the port your app runs on (e.g., 3000)
#EXPOSE 3000

# Define the command to run your app
CMD ["node", "index.js"]