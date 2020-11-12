import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  cursor: pointer;
  outline: 0;
  border-radius: 4px;
  padding: 9px 16px;
  font-size: 14px;
  outline: 0;
  border: none; 
  transition: .4s transform;
  user-select: none;
  font-weight: 500;
  line-height: 16px;

  :active {
    transform: scale(.9);
  }
`

export const BtnPrimary = styled(ButtonStyled)`
  color: white;
  background-color: var(--primary);
`

function Button({ children, onClick,...props }) {
  return <ButtonStyled {...props} onClick={onClick}>{children}</ButtonStyled>
}


export default Button