import React from 'react'
import styled from 'styled-components'
import { BtnPrimary } from 'common/button'
import { estados } from './estados'
import ColonyItem from './colonie-item'

const ColoniesListStyled = styled.section`
  .row-filter {
    margin: 10px 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .select-container {
    width: fit-content;
  }
  .select {
    margin-top: 8px;
    display: flex;
    height: 34px;
    padding: 6px 11px;
    border: 1px solid #D0D7DC;
    border-radius: 4px;
  }
  .estados {
    font-size: 14px;
    font-weight: 600;
  }
  .colonies-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
  }
`

function ColoniesList() {
  return (
    <ColoniesListStyled>
      <div className="row-filter">
        <div className="select-container">
          <label className="estados" htmlFor="estados">Filtrar por estado</label>
          <select id="estados" className="select" name="estados">
            <option value="">Estado</option>
            {estados.map((estado, index) => {
              return <option key={index} value={estado}>{estado}</option>
            })}
          </select>
        </div>
        <BtnPrimary>Agregar colonia</BtnPrimary>
      </div>
      <div className="colonies-list">
        <ColonyItem />
        <ColonyItem />
        <ColonyItem />
        <ColonyItem />
        <ColonyItem />
        <ColonyItem />
        <ColonyItem />
      </div>
    </ColoniesListStyled>
  )
}

export default ColoniesList