import React from 'react'
import styled from 'styled-components'

const DividerStyled = styled.div`
  background-color: red;
  width: 1px;
  height: 100%;
`

function divider() {
  return <DividerStyled />
}

export default divider