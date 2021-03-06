import React from 'react'
import styled from 'styled-components'

const ContainerStyled = styled.div`
  height: calc(100vh - 60px);
  position: relative;
`

function Wrapper({ children }) {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  )
}

export default Wrapper