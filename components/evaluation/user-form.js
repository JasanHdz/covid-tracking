import React from 'react'
import styled from 'styled-components'
import FormGroup, { styles } from 'common/form-group'
import { BtnPrimary } from 'common/button'
import useInputValue from 'hooks/use-input-value'

const Button = styled(BtnPrimary)`
  padding: 9px 16px;
`

function UserForm({ setNextPage, payload, setPayload }) {
  const name = useInputValue(payload.name)
  const apellidoPaterno = useInputValue(payload.apellidoPaterno)
  const apellidoMaterno = useInputValue(payload.apellidoMaterno)
  const age = useInputValue(payload.age)
  const phoneNumber = useInputValue(payload.phoneNumber)
  const email = useInputValue(payload.email)
  const estado = useInputValue(payload.estado)
  const localidad = useInputValue(payload.localidad)
  const address = useInputValue(payload.address)
  const handlePersonalData = (event) => {
    event.preventDefault()
    setNextPage(true)
    setPayload({
      name: name.value,
      apellidoPaterno: apellidoMaterno.value,
      apellidoMaterno: apellidoMaterno.value,
      age: age.value,
      phoneNumber: phoneNumber.value,
      email: email.value,
      estado: estado.value,
      localidad: localidad.value,
      address: address.value
    })
  }
  return (
    <form method="POST" onSubmit={handlePersonalData}>
      <FormGroup {...name} label="Nombre" placeholder="Ingresa tu nombre" id="name" />
      <FormGroup {...apellidoPaterno} label="Apellido paterno" placeholder="Ingresa tu apellido paterno" id="lastName1" />
      <FormGroup {...apellidoMaterno} label="Apellido materno" placeholder="Ingresa tu apellido materno" id="lastName2" />
      <FormGroup {...age} label="Edad" placeholder="Ingresa tu edad" id="age" type="number" min="5" max="100" />
      <FormGroup {...phoneNumber} label="Teléfono" placeholder="Ingresa tu teléfono" id="tel" type="number" />
      <FormGroup {...email} label="Correo electrónico" placeholder="Ingresa tu correo electrónico" type="email" id="email" />
      <FormGroup {...estado} label="Estado" placeholder="Ingresa tu estado" id="estado" />
      <FormGroup {...localidad} label="Municipio" placeholder="Ingresa tu municipio" id="localidad" />
      <div className="group">
        <label htmlFor="address">Domicilio (Calle, número, colonia y codigo postal)</label><br />
        <textarea {...address} name="address" id="address" maxLength="150" />
      </div>
      <Button>Siguiente</Button>
    </form>
  )
}

export default UserForm