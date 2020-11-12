import React, { useState } from 'react'
import styled from 'styled-components'
import UserForm from 'components/evaluation/user-form'
import { userPayload, modelTestPayload } from 'components/evaluation/models'
import TestForm from 'components/evaluation/test-form'

const UserFormDataStyled = styled.section`
  margin-bottom: 80px;
`

function UserDataForm() {
  const [nextPage, setNextPage] = useState(false)
  const [payload, setPayload] = useState(userPayload)
  return (
    <UserFormDataStyled>
      {!nextPage && <UserForm payload={payload} setPayload={setPayload} setNextPage={setNextPage}/> }
      {nextPage && <TestForm setNextPage={setNextPage} userPayload={payload} />}
    </UserFormDataStyled>
  )
}

export default UserDataForm