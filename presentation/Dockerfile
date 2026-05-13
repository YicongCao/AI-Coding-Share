FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm ci --omit=dev && npm i tsx
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/tsconfig.json /app/tsconfig.node.json ./
ENV NODE_ENV=production
EXPOSE 5174
CMD ["npx", "tsx", "server/index.ts"]
