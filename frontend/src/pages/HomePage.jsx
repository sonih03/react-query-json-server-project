import React from 'react'
import Dashboard from '../components/home/Dashboard'
import styled from 'styled-components'

const HomePage = () => {
  return (
    <Container>
      <Dashboard/>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: transparent;
  padding: 32px;
  box-sizing: border-box;

  /* Dashboard 컴포넌트의 루트 div 타겟팅 */
  > div {
    display: flex;
    flex-direction: column;
    gap: 32px;

    /* 상단 KPI 요약 카드 영역 컨테이너 */
    > div:first-child {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 20px;

      @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }

      /* 개별 KPI 요약 카드 공통 스타일 */
      > div {
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(30px);
        padding: 24px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

        /* 지표 타이틀 공통 스타일 */
        > div:first-child {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        /* 지표 수치 공통 스타일 */
        > div:last-child {
          font-size: 22px;
          font-weight: 800;
          color: #1e293b;
          letter-spacing: -0.02em;
        }

        /* 1번째 카드: 총 매출액 (연한 그린 에메랄드 톤) */
        &:nth-child(1) {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(255, 255, 255, 0.5) 100%);
          border: 1px solid rgba(16, 185, 129, 0.22);
          box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.8), 0 10px 25px rgba(16, 185, 129, 0.01);
          
          > div:first-child {
            color: #047857; /* 텍스트 진한 그린 */
          }
          
          &:hover {
            transform: translateY(-4px);
            box-shadow: inset 0 2px 5px rgba(255, 255, 255, 0.9), 0 15px 30px rgba(16, 185, 129, 0.12);
          }
        }

        /* 2번째 카드: 총 판매수량 (연한 오렌지/옐로우 톤) */
        &:nth-child(2) {
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(255, 255, 255, 0.5) 100%);
          border: 1px solid rgba(245, 158, 11, 0.22);
          box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.8), 0 10px 25px rgba(245, 158, 11, 0.01);
          
          > div:first-child {
            color: #b45309; /* 텍스트 진한 브라운/골드 */
          }
          
          &:hover {
            transform: translateY(-4px);
            box-shadow: inset 0 2px 5px rgba(255, 255, 255, 0.9), 0 15px 30px rgba(245, 158, 11, 0.12);
          }
        }

        /* 3번째 카드: 총 주문건수 (연한 블루 톤) */
        &:nth-child(3) {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(255, 255, 255, 0.5) 100%);
          border: 1px solid rgba(59, 130, 246, 0.22);
          box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.8), 0 10px 25px rgba(59, 130, 246, 0.01);
          
          > div:first-child {
            color: #1d4ed8; /* 텍스트 진한 블루 */
          }
          
          &:hover {
            transform: translateY(-4px);
            box-shadow: inset 0 2px 5px rgba(255, 255, 255, 0.9), 0 15px 30px rgba(59, 130, 246, 0.12);
          }
        }

        /* 4번째 카드: 고객 수 (연한 퍼플/인디고 톤) */
        &:nth-child(4) {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(255, 255, 255, 0.5) 100%);
          border: 1px solid rgba(139, 92, 246, 0.22);
          box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.8), 0 10px 25px rgba(139, 92, 246, 0.01);
          
          > div:first-child {
            color: #6d28d9; /* 텍스트 진한 퍼플 */
          }
          
          &:hover {
            transform: translateY(-4px);
            box-shadow: inset 0 2px 5px rgba(255, 255, 255, 0.9), 0 15px 30px rgba(139, 92, 246, 0.12);
          }
        }

        /* 5번째 카드: 상품 수 (연한 핑크/에프리콧 톤) */
        &:nth-child(5) {
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(255, 255, 255, 0.5) 100%);
          border: 1px solid rgba(236, 72, 153, 0.22);
          box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.8), 0 10px 25px rgba(236, 72, 153, 0.01);
          
          > div:first-child {
            color: #be185d; /* 텍스트 진한 핑크 */
          }
          
          &:hover {
            transform: translateY(-4px);
            box-shadow: inset 0 2px 5px rgba(255, 255, 255, 0.9), 0 15px 30px rgba(236, 72, 153, 0.12);
          }
        }
      }
    }

    /* 하단 차트 영역 컨테이너 */
    > div:last-child {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;

      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
      }

      /* 개별 차트 카드 */
      > div {
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.45) 0%,
          rgba(255, 255, 255, 0.15) 100%
        );
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(30px);
        border: 1px solid rgba(255, 255, 255, 0.45);
        border-radius: 24px;
        padding: 28px;
        box-shadow: 
          inset 0 2px 3px rgba(255, 255, 255, 0.8),
          0 10px 25px rgba(0, 0, 0, 0.02);
        display: flex;
        flex-direction: column;
        gap: 20px;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

        /* 차트 타이틀 */
        > div:first-child {
          font-size: 18px;
          font-weight: 750;
          color: #1e293b;
          margin: 0;
          letter-spacing: -0.02em;
        }

        /* 차트 캔버스 영역 */
        > div:last-child {
          width: 100%;
          height: 320px;
          position: relative;
        }

        /* 1번째 차트 카드 (유리막에 푸른빛 가미) */
        &:nth-child(1) {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.04) 0%, rgba(255, 255, 255, 0.4) 100%);
          border-color: rgba(59, 130, 246, 0.18);
          &:hover {
            transform: translateY(-2px);
            box-shadow: inset 0 2px 5px rgba(255, 255, 255, 0.9), 0 15px 35px rgba(59, 130, 246, 0.08);
          }
        }

        /* 2번째 차트 카드 (유리막에 보랏빛 가미) */
        &:nth-child(2) {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.04) 0%, rgba(255, 255, 255, 0.4) 100%);
          border-color: rgba(139, 92, 246, 0.18);
          &:hover {
            transform: translateY(-2px);
            box-shadow: inset 0 2px 5px rgba(255, 255, 255, 0.9), 0 15px 35px rgba(139, 92, 246, 0.08);
          }
        }
      }
    }
  }
`;
