# 1. 가볍고 강력한 순정 Nginx 리눅스 이미지 채택 ✨
FROM nginx:alpine

# 2. 같은 폴더에 있는 nginx.conf 설정 파일을 컨테이너 내부의 정석 경로로 주입 ✨
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 3. 컨테이너가 켜지자마자 백그라운드로 도망가지 말고 웹 서버 본업 켜기 ✨
CMD ["nginx", "-g", "daemon off;"]