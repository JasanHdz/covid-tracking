import React from 'react'
import styled from 'styled-components'

const LoginHeroStyled = styled.section`
  display: none;
  background-color: #cfead7;
  img { 
    background-size: cover; 
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`

function LoginHero() {
  return (
    <LoginHeroStyled>
        <img height="600" width="600" src="/hero.svg" alt="" /><br />
    </LoginHeroStyled>
  )
}

export default LoginHero