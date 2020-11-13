import Wrapper from 'common/wrapper'
import React from 'react'
import styled from 'styled-components'
import Button from 'common/button'

const ButtonStyled = styled(Button)`
  padding: 4px 12px;
  color: white;
`

const ColonyStyled = styled.article`
  border-radius: 6px;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 105px;
  border: 1px solid #D0D7DC;
  border-radius: 6px;
  .colony-info {
    h4 {
      margin-bottom: 5px;
    }
    p {
      font-size: 12px;
      line-height: 14px;
    }
  }
  .colony-buttons {
    display: grid;
    grid-row-gap: 8px;
    align-items: center;
  }
`

function Colony() {
  return (
    <ColonyStyled>
      <div className="colony-info">
        <h4>El tamborcito, Puebla, México</h4>
        <p>Confirmados: 5.000</p>
        <p>Recuperados: 1,000</p>
        <p>Muertes: 2,000</p>
      </div>
      <div className="colony-buttons">
        <ButtonStyled background="#FF7474">Eliminar</ButtonStyled>
        <ButtonStyled background="#C4C4C4">Ver Detalles</ButtonStyled>
      </div>
    </ColonyStyled>
  )
}

export default Colony