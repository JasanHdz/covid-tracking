import React from 'react'
import styled from 'styled-components'

const UserStyled = styled.section`
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    margin-right: 12px;
  }
  h4 {
    font-size: 14px;
  }
  p {
    color: var(--gray);
  }
`

function User({ photoURL, userName }) {
  return (
    <UserStyled>
      <img width={45} height={45} src={photoURL} alt="avatar" />
      <div>
        <h4>¡Hola! {userName}</h4>
        <p>Administrador</p>
      </div>
    </UserStyled>
  )
}

export default User