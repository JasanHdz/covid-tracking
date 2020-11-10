import React from 'react'
import styled from 'styled-components'

const LoginGridStyled = styled.div`
  @media screen and (min-width: 1024px) {
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

function LoginGrid({ children }) {
  return <LoginGridStyled>{children}</LoginGridStyled>
}

export default LoginGrid