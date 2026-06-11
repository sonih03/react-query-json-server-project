pipeline {
    agent any

    stages {
        stage('1. 깃허브 소스 코드 체크아웃') {
            steps {
                echo '📦 깃허브 원격 저장소로부터 최신 소스코드를 가져오는 중...'
                checkout scm
            }
        }

        stage('2. 프론트엔드 라이브러리 강제 설치 및 빌드') {
            steps {
                dir('frontend') {
                    echo '🧹 기존 낡은 부품 상자(node_modules) 및 캐시 완전 삭제 중...'
                    sh 'rm -rf node_modules package-lock.json'
                    echo '📥 최신 노드 부품 무결점 강제 설치 중...'
                    sh 'npm install'
                    echo '🚀 리액트 프로덕션 빌드 압축 가동 (Vite Build)...'
                    sh 'npm run build'
                }
            }
        }

        stage('3. 도커 컴포즈 인프라 배포 및 컨테이너 갱신') {
            steps {
                echo '⚡ 알박기 좀비 컨테이너 선제 타격 및 클린 재빌드 기동...'
                // 💡 젠킨스가 배포하기 전에 기존 충돌 컨테이너들을 알아서 먼저 강제 소거하도록 설계!
                sh 'docker rm -f frontend-nginx mock-backend || true'
                sh 'docker compose down'
                sh 'docker compose up -d --build --force-recreate'
            }
        }
    }

    post {
        success {
            echo '✨ [성공] 젠킨스가 내부 명령어로 부품 싹 새로 깔고 배포 완수!'
        }
        failure {
            echo '❌ [실패] 빌드 파이프라인에 락이 걸렸습니다. 로그를 체크하세요.'
        }
    }
}