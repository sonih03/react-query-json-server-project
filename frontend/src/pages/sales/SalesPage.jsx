import React from 'react'
import SalesTable from '../../components/sales/SalesTable'
import { getCurrentUser } from '../../store/hooks/useUser'
import AuthControl from '../../components/layout/AuthControl';
import styled from 'styled-components'

const SalesPage = () => {
  const user = getCurrentUser();
  if(!user){
    return(
      <AuthControl
        message='로그인 후 매출 정보를 조회할 수 있습니다.'
      />
    )
  }
  return (
    <Container>
      <SalesTable/>
    </Container>
  )
}

export default SalesPage

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: transparent;
  padding: 32px;
  box-sizing: border-box;
`;
