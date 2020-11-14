import React from 'react'
import styled from 'styled-components'
import Button from 'common/button'
import { useRouter } from 'next/router'

const ButtonStyled = styled(Button)`
  padding: 6px 12px;
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

function Colony({ colonie, deleteColonie }) {
  const {
    uid,
    confirmados,
    recuperados,
    colonia,
    city,
    muertes
  } = colonie
  const router = useRouter()
  const editColonie = (uid) => {
    router.push({
      pathname: '/admin/[slug]',
      query: { slug: uid }
    })
  } 
  console.log(colonia, city, 'items')
  return (
    <ColonyStyled>
      <div className="colony-info">
        <h4>{colonia}, {city}</h4>
        <p>Confirmados: {confirmados}</p>
        <p>Recuperados: {recuperados}</p>
        <p>Muertes: {muertes}</p>
      </div>
      <div className="colony-buttons">
        <ButtonStyled onClick={() => editColonie(uid)} background="#C4C4C4">Editar</ButtonStyled>
        <ButtonStyled onClick={() => deleteColonie(uid)} background="#FF7474">Eliminar</ButtonStyled>
      </div>
    </ColonyStyled>
  )
}

export default Colony