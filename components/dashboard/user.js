import React from 'react'
import styled from 'styled-components'

const UserStyled = styled.section`
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    margin-right: 12px;
    object-fit: cover;
  }
  h4 {
    font-size: 14px;
  }
  p {
    color: var(--gray);
  }
`

function User({ photoURL, userName }) {
  const avatarRandom = 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  const url = photoURL !== null ? photoURL : avatarRandom
  return (
    <UserStyled>
      <img width={45} height={45} src={url} alt="avatar" />
      <div>
        <h4>¡Hola! {userName || 'Súper Admin'}</h4>
        <p>Administrador</p>
      </div>
    </UserStyled>
  )
}

export default User