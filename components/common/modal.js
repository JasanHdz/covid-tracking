import React, { useState } from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import Wrapper from 'common/wrapper'
import Graph from 'common/graph'
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'

const ModalStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  ${({ active }) => active ? 'top: 0' : ''};
  z-index: 3;

  border-top-right-radius: ${({ active }) => active ? '0px' : '20px'};
  border-top-left-radius: ${({ active }) => active ? '0px' : '20px'};
  height: auto;
  background-color: white;
  animation: fadeIn .3s ease-out;

  @keyframes fadeIn {
    from {
      transform: translateY(200px);
    } to {
      transform: translateY(0);
    }
  }

  .modal-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
  .modal-title {
    font-size: ${({active}) => active ? '24px' : '16px'};
    margin-bottom: 8px;
  }
  .modal-content {
    padding: 3.5px;
    display: flex;
    flex-direction: column;
    height: auto;
  }
  .modal-grid {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 14px;
    margin-bottom: 40px;
  }
  .item {
    &-title {
      color: rgba(38,38,38, 0.5);
    }
    &:first-child .item-color {
      color: #ED4B4B;
    }
    &:nth-child(2) .item-color {
      color: #FEC703;
    }
    &:nth-child(3) .item-color {
      color: var(--primary);
    }
  }
  .more-button {
    margin-top: 20px;
    color: white;
    background-color: var(--primary);
    padding: 15px;
    border: none;
    border-radius: 6px;
    width: 100%;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    outline: 0;
    transition: .4s transform;

    :active {
      transform: scale(.9);
    }
  }
  .title-date {
    color: rgba(38,38,38, 0.5);
  }
`

function Modal({ data, onClose }) {
  const { city, colonia, confirmados, muertes, recuperados } = data
  const [activeShowMore, setActiveShowMore] = useState(false)
  function handleClick() {
    setActiveShowMore(true)
  }
  return (
    <ModalStyled active={activeShowMore}>
      <Wrapper>
        <div className="modal-close" onClick={onClose}>
          <MdClose className="close" size={25} color="var(--primary)" />
        </div>
        <div className="modal-content">
          <p className="modal-title"><strong>{colonia}, {city}</strong></p>
          <p style={{ color: '#ED4B4B'}}>{confirmados} Casos de Covid-19 <span className="title-date"> ° Sep 18 - Oct 18</span></p>
          <div className="modal-grid">
            <div className="item">
              <p className="item-title">Confirmados:</p>
              <h4 className="item-color">{confirmados}</h4>
              <small><BsArrowUp size={10} color="#ED4B4B" /> 5</small>
            </div>
            <div className="item">
              <p className="item-title">Sospechosos:</p>
              <h4 className="item-color">10</h4>
              <small><BsArrowDown size={10} color="#FEC703" /> 8</small>
            </div>
            <div className="item">
              <p className="item-title">Recuperados:</p>
              <h4 className="item-color">{recuperados}</h4>
              <small><BsArrowUp size={10} color="var(--primary)" /> 2</small>
            </div>
            <div className="item">
              <p className="item-title">Negativos:</p>
              <h4 className="item-color">3</h4>
              <small><BsArrowUp size={10} color="#ED4B4B" /> 1</small>
            </div>
            <div className="item">
              <p className="item-title">Defunciones:</p>
              <h4 className="item-color">{muertes}</h4>
              <small><BsArrowUp size={10} color="#ED4B4B" /> 3</small>
            </div>
          </div>
          {!activeShowMore && <button className="more-button" onClick={handleClick}>Ver detalles</button>}
          {activeShowMore && <Graph />}
          {/* {activeShowMore && <button>Imprimir datos</button>} */}
        </div>
      </Wrapper>
    </ModalStyled>
  )
}

export default Modal