import React from 'react'
import styled from 'styled-components'

const EvaluationHeaderStyled = styled.header`
  .one-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      color: var(--primary);
    }
  }
  .two-line {
    text-transform: uppercase;
    color: var(--secondaryContrast);
    margin: 1rem 0;
  }
`

function Header({ numberPage = 2, postion = 1 }) {
  return (
    <EvaluationHeaderStyled>
      <div className="one-line">
        <h2>Autodiagnóstico</h2>
        <p>{postion} de {numberPage}</p>
      </div>
      {postion == 1 && (
        <p className="two-line">Datos Personales</p>
      )}
      {postion == 2 && (
        <p className="two-line">Cuestionario</p> 
      )}
    </EvaluationHeaderStyled>
  )
}

export default Header