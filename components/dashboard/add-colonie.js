import React from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import Wrapper from 'common/wrapper'
import FormGroup from 'common/form-group'
import { BtnPrimary } from 'common/button'
import useInputValue from 'hooks/use-input-value'
import { modelColonie } from './model-colonie'
import Places from 'lib/database/places'

const AddColonieStyled = styled.div`
  position: fixed;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 11;
  svg {
    cursor: pointer;
  }
  .addcolonie-modal--header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1em;
  }
  .row-two-columns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 15px;
  }
  @media screen and (min-width: 375px) {
    height: fit-content;
    border-radius: 15px;
    width: 90%;
  }
  @media screen and (min-width: 760px) {
    width: 70%;
  }
`

function AddColonieModal({ onClose, place, setPlace, updateList }) {
  const city = useInputValue(place.city)
  const colonia = useInputValue(place.colonia)
  const lat = useInputValue(place.lat)
  const lng = useInputValue(place.lng)
  const confirmados = useInputValue(place.confirmados)
  const muertes = useInputValue(place.muertes)
  const recuperados = useInputValue(place.recuperados)
  const disabled = city.isEmpty || colonia.isEmpty || lat.isEmpty || lng.isEmpty || confirmados.isEmpty || muertes.isEmpty || recuperados.isEmpty
  const handleSubmit = (event) => {
    event.preventDefault()
    const payload = {
      city: city.value,
      colonia: colonia.value,
      lat: lat.value,
      lng: lng.value,
      confirmados: confirmados.value,
      muertes: muertes.value,
      recuperados: recuperados.value,
    }
    new Places().addDocument(payload).then(docRef => {
      updateList({ ...payload, uid: docRef.id })
    }).catch(({ message }) => console.log(`oh no! parace que ocurrió un error ${message}`))
    setPlace(modelColonie)
    onClose()
  }
  const handleClose = () => {
    const payload = {
      city: city.value,
      colonia: colonia.value,
      lat: lat.value,
      lng: lng.value,
      confirmados: confirmados.value,
      muertes: muertes.value,
      recuperados: recuperados.value
    }
    setPlace(payload)
    onClose()
  }
  return (
    <AddColonieStyled>
      <Wrapper>
      <div className="addcolonie-modal--header">
          <h3>Agregar colonia</h3>
          <MdClose onClick={handleClose} className="close" size={28} color="var(--primary)" />
      </div>
      <form method="POST" onSubmit={handleSubmit}>
        <FormGroup {...colonia} label="Colonia" />
        <FormGroup {...city} label="Estado" />
        <div className="row-two-columns">
          <FormGroup {...lat} type="number" label="Latitud" />
          <FormGroup {...lng} type="number" label="Longitud" />
        </div>
        <FormGroup {...confirmados} type="number" label="Confirmados" />
        <FormGroup {...recuperados} type="number" label="Recuperados" />
        <FormGroup {...muertes} type="number" label="Muertes" />
        <BtnPrimary disabled={disabled} fullSize>Guardar</BtnPrimary>
      </form>
      </Wrapper>
    </AddColonieStyled>
  )
}

export default AddColonieModal