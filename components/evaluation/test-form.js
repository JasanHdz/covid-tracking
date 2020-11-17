import React, { useRef } from 'react'
import RatioFormGroup from 'common/radio-form-group'
import Button, { BtnPrimary } from 'common/button'

const mapValues = [
  {
    question: "¿Haz presentado fiebre ariba de 38° C?",
    name: "fiebre",
  },
  {
    question: "¿Tiene usted tos seca?",
    name: "tos",
  },
  {
    question: "¿Presenta escurrimiento nasal?",
    name: "escurrimiento",
  },
  {
    question: "¿Tiene dolor de cuerpo?",
    name: "cuerpo cortado",
  }
]

function TestForm({ setNextPage, userPayload }) {
  const ref = useRef(null)
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(ref.current)
    const testPayload = {
      fiebre: formData.get('fiebre'),
      tos: formData.get('tos'),
      escurrimiento: formData.get('escurrimiento'),
      cuerpoCortado: formData.get('cuerpo cortado'),
    }
    const data = {
      testPayload,
      userPayload
    }
    alert('Genial la data esta siendo procesada ☺😎☺😛')
  }
  return (
    <form ref={ref} method="POST" onSubmit={handleSubmit}>
      {mapValues.map((item, index) => (
        <RatioFormGroup
          key={index}
          question={item.question}
          name={item.name}
          value1={1}
          value2={0}
          id1={item.name}
          id2={`not${item.name}`}
        />
      ))}
      <div className="buttons-grid">
        <Button type="button" onClick={() => setNextPage(false)}>Volver</Button>
        <BtnPrimary type="submit">Enviar datos</BtnPrimary>
      </div>
    </form>
  )
}


export default TestForm