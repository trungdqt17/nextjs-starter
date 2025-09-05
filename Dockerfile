# syntax=docker/dockerfile:1

# =========================================
# Stage 1: Build the Next.js Application
# =========================================
ARG NODE_VERSION=19.1.0-alpine

FROM node:${NODE_VERSION} AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package-related files first to leverage Docker's caching mechanism
COPY package.json yarn.lock ./

# Install project dependencies using yarn (ensures a clean, reproducible install)
RUN --mount=type=cache,target=/root/.yarn yarn install --frozen-lockfile

# Copy the rest of the application source code into the container
COPY . .

# Build the Next.js application for production
RUN yarn build

# =========================================
# Stage 2: Production Environment
# =========================================
FROM node:${NODE_VERSION}-alpine AS runner

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set the working directory
WORKDIR /app

# Copy the public folder from the project
COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to the non-root user
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

# Set the port environment variable
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the Next.js application
CMD ["node", "server.js"]
