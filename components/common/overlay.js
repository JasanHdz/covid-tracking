import React from 'react'
import styled from 'styled-components'

const OverlayStyled = styled.div`
  background: ${({ background }) => background || 'rgba(38, 38, 38, 0.5)'};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  position: ${({ position }) => position || 'fixed'};
  z-index: ${({ zIndex }) => zIndex || 2};
  /* backdrop-filter: blur(2px); */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

function Overlay({ children, onClick, ...otherProps }) {
  function handleClick(event) {
    if (onClick) {
      console.log('has hecho click')
      onClick()
    }
  }
  return (
    <OverlayStyled onClick={handleClick} {...otherProps}>
      {children}
    </OverlayStyled>
  )
}

export default Overlay