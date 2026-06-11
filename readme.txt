docker build -t custom-jenkins .

ㅓ두

  docker run -d `
    --name jenkins `
    --restart unless-stopped `
    -p 8080:8080 `
    -p 50000:50000 `
    -v jenkins_home:/var/jenkins_home `
    -v //var/run/docker.sock:/var/run/docker.sock `
    custom-jenkins

    비밀번호 명령어
    docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword

    비밀번호
    495a757c90fa4b2db3265bd107b5e2b2

    젠킨스 포멧
    # 1. 구동 중인 젠킨스 컨테이너 강제 종료 및 삭제
    docker rm -f jenkins

    # 2. (★핵심) 모든 버그의 원인인 구형 볼륨 저장소 완벽 삭제
    docker volume rm jenkins_home

    docker run -d --name jenkins --restart unless-stopped -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock my-jenkins:latest

    # 1. 도커 소켓 권한 다시 부여
    docker exec -u 0 jenkins chmod 666 /var/run/docker.sock

    # 2. 정석대로 초기 비밀번호 파일 출력!
    docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword



    http://localhost:8080/

    깃허브에서 developer setting
    Personal access tokens
    token classic
    repo & workflow 체크
    밑으로 내려서 Generate token
    note에 원하는 이름 적고
    expiration 90일로 변경 (90일 뒤에 삭제된다는 뜻)

    ls -al

    docker exec -it jenkins bash

    docker --version