pipeline {
    agent any

    environment {
        // 프론트엔드 리액트 코드가 들어있는 하위 폴더 이름 설정
        FRONTEND_DIR = 'frontend'
    }

    stages {
        stage('1. 깃허브 소스 코드 체크아웃') {
            steps {
                echo '📦 깃허브 원격 저장소로부터 최신 소스코드를 가져오는 중...'
                checkout scm
            }
        }

        stage('2. 프론트엔드 라이브러리 설치 및 빌드') {
            steps {
                echo '🏗️ Node.js 기반 리액트 빌드 파이프라인 가동...'
                // frontend 폴더 내부로 이동해서 노드 부품을 깔고 빌드 수행 (dist 생성)
                dir("${env.FRONTEND_DIR}") {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('3. 도커 컴포즈 인프라 배포 및 컨테이너 갱신') {
            steps {
                echo '⚡ Docker Compose 기반 컨테이너 완전 재빌드 및 배포 시동...'
                // 최상위 루트 경로에서 Nginx 설정 변경본과 db.json을 반영하여 컨테이너 리로드
                // --build 옵션을 주어 nginx 설정 파일(nginx.conf) 변경사항을 100% 강제 반영
                sh 'docker compose down'
                sh 'docker compose up -d --build'
            }
        }
    }

    post {
        success {
            echo '======================================================='
            echo '✨ [성공] Jenkins 파이프라인이 정석대로 무결점 배포를 완료했습니다!'
            echo '🌐 프론트엔드(Nginx): http://localhost'
            echo '🌐 가짜 백엔드(JSON Server): http://localhost:3001'
            echo '======================================================='
        }
        failure {
            echo '======================================================='
            echo '❌ [실패] 빌드 또는 배포 단계에서 인프라 락이 터졌습니다.'
            echo '📝 젠킨스 Console Output 로그를 분석하여 권한이나 오타를 제어하세요.'
            echo '======================================================='
        }
    }
}