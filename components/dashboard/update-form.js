import React, { useState } from 'react'
import FormGroup from 'common/form-group'
import Select from 'common/select'
import { BtnPrimary } from 'common/button'
import useInputValue from 'hooks/use-input-value' 
import { compareTwoObjects } from 'utils/comparate-objects'
import Places from 'lib/database/places'


function UpdateForm({ place }) {
  const [newPlace, setNewPlace] = useState(place)
  const city = useInputValue(place.city)
  const colonia = useInputValue(place.colonia)
  const lat = useInputValue(place.lat)
  const lng = useInputValue(place.lng)
  const confirmados = useInputValue(place.confirmados)
  const muertes = useInputValue(place.muertes)
  const recuperados = useInputValue(place.recuperados)

  const disabled = compareTwoObjects({
    city: city.value,
    colonia: colonia.value,
    lat: lat.value,
    lng: lng.value,
    confirmados: confirmados.value,
    muertes: muertes.value,
    recuperados: recuperados.value,
    uid: place.uid
  }, newPlace)
  
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
      uid: place.uid
    }
    if (!compareTwoObjects(newPlace, payload)) {
      new Places().updateDocumentByUid(place.uid, payload).then(() => {
        setNewPlace(payload)
        alert(`El documento con id: ${place.uid} se actualizo correctamente`)
      })
    } 
  }
  return (
    <form method="POST" onSubmit={handleSubmit}>
      <FormGroup value={colonia.value} onChange={recuperados.onChange} label="Colonia" id="colonia" />
      <Select value={city.value} option={city.value} onChange={city.onChange} label="Estado" id="estado" />
      <FormGroup type="number" value={lat.value} onChange={lat.onChange} label="Latitud"  id="latitud"/>
      <FormGroup type="number" value={lng.value} onChange={lng.onChange} label="Longitud" id="longitud" />
      <FormGroup type="number" value={confirmados.value} onChange={confirmados.onChange} label="Confirmados" id="confirmados" />
      <FormGroup type="number" value={recuperados.value} onChange={recuperados.onChange} label="Recuperados" id="recuperados" />
      <FormGroup type="number" value={muertes.value} onChange={muertes.onChange} label="Muertes" id="muertes" />
      <BtnPrimary disabled={disabled}>Guardar cambios</BtnPrimary>
    </form>
  )
}

export default UpdateForm