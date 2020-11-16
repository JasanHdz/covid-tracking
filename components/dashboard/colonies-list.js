import React, { useState } from 'react'
import { UniversalPortal } from '@jesstelford/react-portal-universal'
import styled from 'styled-components'
import { BtnPrimary } from 'common/button'
import { estados } from './estados'
import ColonyItem from './colonie-item'
import AddColonieModal from './add-colonie'
import Overaly from 'common/overlay'
import { modelColonie } from './model-colonie'
import Search from 'components/dashboard/search'

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

function filterColonies(colonie, value) {
  if (
    colonie.colonia.toLowerCase().includes(value.toLowerCase()) ||
    colonie.city.toLowerCase().includes(value.toLowerCase())
  ) return colonie
}

function ColoniesList({ places = [] }) {
  const [colonies, setColonies] = useState(places) 
  const [isActiveAddColonieModal, setIsActiveAddColonieModal] = useState(false)
  const [addPlace, setAddPlace] = useState(modelColonie)
  const [inputValue, setInputValue] = useState('')
  const handleChangeSearch = (event) => {
    const value = event.target.value
    setInputValue(value)
    setColonies(places.filter(item => filterColonies(item, value)))
  }
  const addColonieInList = (payload) => {
    setColonies([payload, ...colonies])
  }
  const deleteColonie = (uid) => {
    const newColonies = colonies.filter(colonie => colonie.uid !== uid) 
    setColonies(newColonies)
  }
  const handleSelectState = (event) => {
    const value = event.target.value
    setColonies(places.filter(item => item.city === value))
    console.log(value)
  }
  return (
    <ColoniesListStyled>
      <Search value={inputValue} onChange={handleChangeSearch} />
      <div className="row-filter">
        <div className="select-container">
          <label className="estados" htmlFor="estados">Filtrar por estado</label>
          <select onChange={handleSelectState} id="estados" className="select" name="estados">
            <option disabled defaultValue >Estado</option>
            {estados.map((estado, index) => {
              return <option key={index} value={estado}>{estado}</option>
            })}
          </select>
        </div>
        <BtnPrimary onClick={() => setIsActiveAddColonieModal(true)}>Agregar colonia</BtnPrimary>
      </div>
      <div className="colonies-list">
        {colonies.map((colonie) => <ColonyItem key={colonie.uid} deleteColonie={deleteColonie} colonie={colonie} />)}
      </div>
      {isActiveAddColonieModal && (
        <UniversalPortal selector="#page-portal">
          <Overaly zIndex={10} isActive>
            <AddColonieModal
              place={addPlace}
              setPlace={setAddPlace}
              onClose={() => setIsActiveAddColonieModal(false)}
              updateList={addColonieInList}
            />
          </Overaly>
        </UniversalPortal>
      )}
    </ColoniesListStyled>
  )
}

export default ColoniesList