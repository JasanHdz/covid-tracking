import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

const ModalLayoutStyled = styled.section`
  width: 90%;
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  left: 0;
  right: 0;
  margin: auto;
  z-index: 3;
  height: fit-content;
  background-color: white;
  border-radius: 10px;
  border-top: 10px solid #FF7474;

  .modal-title {
    margin-bottom: 1rem;
  }

  .layout-wrapper {
    padding: 0 1rem 1rem 1rem;
    text-align: center;
  }
  .layout-close {
    cursor: pointer;
    text-align: end;
    padding: 0.5rem 0.5rem 0 0;
  }

  .buttons-wrapper {
    display: flex;
   justify-content: space-evenly;
    padding: 0 50px;
  }
`

function ModalLayout({ children, onClose }) {
  return (
    <ModalLayoutStyled>
      <div className="layout-close" onClick={onClose}>
        <MdClose className="close" size={25} color="var(--primary)" />
      </div>
      <div className="layout-wrapper">
        {children}
      </div>
    </ModalLayoutStyled>
  )
}

export default ModalLayout