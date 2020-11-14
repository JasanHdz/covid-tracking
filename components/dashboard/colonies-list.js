import React, { useState } from 'react'
import { UniversalPortal } from '@jesstelford/react-portal-universal'
import styled from 'styled-components'
import { BtnPrimary } from 'common/button'
import { estados } from './estados'
import ColonyItem from './colonie-item'
import AddColonieModal from './add-colonie'
import Overaly from 'common/overlay'
import { modelColonie } from './model-colonie'

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

function ColoniesList({ places = [] }) {
  const [isActiveModal, setIsActiveModal] = useState(false)
  const [colonies, setColonies] = useState(places)
  const [addPlace, setAddPlace] = useState(modelColonie)
  const handleOpenModal = () => setIsActiveModal(true)
  const deleteColonie = (uid) => {
    const newColonies = colonies.filter(colonie => colonie.uid !== uid) 
    setColonies(newColonies)
  }
  const updateList = (payload) => {
    setColonies([payload, ...colonies])
  }
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
        <BtnPrimary onClick={handleOpenModal}>Agregar colonia</BtnPrimary>
      </div>
      <div className="colonies-list">
        {colonies.map((colonie) => <ColonyItem key={colonie.uid} deleteColonie={deleteColonie} colonie={colonie} />)}
      </div>
      {isActiveModal && (
        <UniversalPortal selector="#page-portal">
          <Overaly zIndex={10} isActive>
            <AddColonieModal
              place={addPlace}
              setPlace={setAddPlace}
              onClose={() => setIsActiveModal(false)}
              updateList={updateList}
            />
          </Overaly>
        </UniversalPortal>
      )}
    </ColoniesListStyled>
  )
}

export default ColoniesList