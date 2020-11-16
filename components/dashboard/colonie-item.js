import React, { useState } from 'react'
import styled from 'styled-components'
import Button from 'common/button'
import { useRouter } from 'next/router'
import { UniversalPortal } from '@jesstelford/react-portal-universal'
import Overaly from 'common/overlay'
import Modal from 'common/modal-layout'
import Places from 'lib/database/places'

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
  const [isActiveModal, setIsActiveModal] = useState(false)
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
  const toggleModal = () => {
    setIsActiveModal(!isActiveModal)
  }
  const handleDeleteColonie = () => {
    new Places().deleteDocumentByUid(uid).then(() => {
      deleteColonie(uid)
      toggleModal()
    }).catch(({ message }) => console.error(message))
  }
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
        <ButtonStyled onClick={toggleModal} background="#FF7474">Eliminar</ButtonStyled>
      </div>
      {isActiveModal && (
        <UniversalPortal selector="#page-portal">
          <Overaly zIndex={10} isActive>
            <Modal onClose={() => setIsActiveModal(false)}>
              <h3 className="modal-title">¿Estas seguro de eliminas la colonia: {colonia}?</h3>
              <div className="buttons-wrapper">
                <Button onClick={handleDeleteColonie} color="white"  background="#FF7474">Confirmar</Button>
                <Button color="white" onClick={toggleModal} background="#C4C4C4">Cancelar</Button>
              </div>
            </Modal>
          </Overaly>
        </UniversalPortal>
      )}
    </ColonyStyled>
  )
}

export default Colony