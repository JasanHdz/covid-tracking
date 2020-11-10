import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  cursor: pointer;
  outline: 0;
  border-radius: 12px;
  padding: 10px;
  font-size: 14px;
  outline: 0;
  border: none; 
  transition: .4s transform;
  user-select: none;


  :active {
    transform: scale(.9);
  }
`

export const BtnPrimary = styled(ButtonStyled)`
  color: white;
  background-color: var(--primary);
  font-size: 1.1rem;
  padding-top: 15px;
  padding-bottom: 15px;
`

function Button({ children, onClick,...props }) {
  return <ButtonStyled {...props} onClick={onClick}>{children}</ButtonStyled>
}


export default Button