pipeline {
    agent any

    environment {
        // 프론트엔드 소스 루트 폴더 설정
        FRONTEND_DIR = 'frontend'
    }

    stages {
        stage('1. 깃허브 소스 코드 체크아웃') {
            steps {
                echo '📦 깃허브 원격 저장소로부터 최신 소스코드를 가져오는 중...'
                checkout scm
            }
        }

        stage('2. 프론트엔드 라이브러리 강제 설치 및 빌드') {
            steps {
                echo '🏗️ Node.js 기반 리액트 빌드 파이프라인 가동...'
                dir("${env.FRONTEND_DIR}") {
                    // 💡 [핵심 보안 제어 명령어]
                    // 혹시나 남아있을지 모르는 낡은 부품 상자와 잠금 파일을 싹 강제로 밀어버림!
                    echo '🧹 기존 낡은 부품 상자(node_modules) 및 캐시 완전 삭제 중...'
                    sh 'rm -rf node_modules package-lock.json'

                    // 의존성을 완전 생으로 깨끗하게 처음부터 다시 다운로드
                    echo '📥 최신 노드 부품(Vite 포함) 무결점 강제 설치 중...'
                    sh 'npm install'

                    // 부품 장착이 확실히 끝난 상태에서 안전하게 프로덕션 빌드 갱신
                    echo '🚀 리액트 프로덕션 빌드 압축 가동 (Vite Build)...'
                    sh 'npm run build'
                }
            }
        }

        stage('3. 도커 컴포즈 인프라 배포 및 컨테이너 갱신') {
                    steps {
                        echo '⚡ 캐시 찌꺼기 완전 소거 및 컴포즈 강제 재빌드 기동...'
                        // 💡 --build와 --force-recreate를 주어 예전 우분투 캐시를 완전히 박살 냄!
                        sh 'docker compose down'
                        sh 'docker compose up -d --build --force-recreate'
                    }
                }

    post {
        success {
            echo '======================================================='
            echo '✨ [성공] 젠킨스가 내부 명령어로 부품 싹 새로 깔고 배포 완수!'
            echo '======================================================='
        }
        failure {
            echo '======================================================='
            echo '❌ [실패] 빌드 파이프라인에 락이 걸렸습니다. 로그를 체크하세요.'
            echo '======================================================='
        }
    }
}