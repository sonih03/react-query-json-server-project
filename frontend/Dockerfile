# 1. 빌드 스테이지
FROM node:20-alpine AS builder
WORKDIR /app

# 의존성 파일 복사 및 설치
COPY package*.json ./
RUN npm install

# 전체 소스 복사 후 프로덕션 빌드 (dist 폴더 생성)
COPY . .
RUN npm run build

# 2. 결과물 출력 스테이지 (Nginx에 얹기 위한 준비)
FROM alpine:latest
WORKDIR /dist
COPY --from=builder /app/dist .