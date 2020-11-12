import React from 'react'
import styled from 'styled-components'
import Menu from 'common/menu/menu'
import Overlay from 'common/overlay'
import { GrMenu, GrClose } from 'react-icons/gr'

const OverlayStyled = styled(Overlay)``

const MenuStyled = styled(Menu)``

const NavigationStyled = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 2;
  .toggle-button {
    position: absolute;
    z-index: 3;
    right: 13px;
    top: 12px;
    padding: 5px;
    background-color: ${({ background }) => (background || 'transparent')};
    cursor: pointer;
    .close {
      display: none;
    }
  }
  .checkbox {
    display: none;
  }
  .checkbox:checked {
    ~ .toggle-button {
      .close {
        display: inline-block;
      }
      .burger {
        display: none;
      }
    }
    ~ ${OverlayStyled} {
      visibility: visible;
    }
    ~ ${MenuStyled} {
      transform: translateX(0);
    }
  }
`

function Navigation({ background }) {
  return (
    <NavigationStyled background={background}>
        <input type="checkbox" className="checkbox" id="toggle-button" />
        <label htmlFor="toggle-button" className="toggle-button">
          <GrMenu className="burger" size={25} color="white" />
          <GrClose className="close" size={25} color="white" />
        </label>
        <OverlayStyled />
        <MenuStyled />
    </NavigationStyled>
  )
}

export default Navigation