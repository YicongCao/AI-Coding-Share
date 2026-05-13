FROM node:22-alpine AS builder
WORKDIR /app
COPY presentation/package.json presentation/package-lock.json ./presentation/
RUN cd presentation && npm ci
COPY speech.txt ./speech.txt
COPY presentation/ ./presentation/
RUN cd presentation && npm run build

FROM node:22-alpine
WORKDIR /app/presentation
COPY --from=builder /app/presentation/package.json /app/presentation/package-lock.json ./
RUN npm ci --omit=dev && npm i tsx
COPY --from=builder /app/presentation/dist ./dist
COPY --from=builder /app/presentation/server ./server
COPY --from=builder /app/presentation/tsconfig.json /app/presentation/tsconfig.node.json ./
ENV NODE_ENV=production
EXPOSE 5174
CMD ["npx", "tsx", "server/index.ts"]
