import React, { useEffect, useRef } from 'react'
import { DataSet } from 'vis-data'
import { Network } from 'vis-network'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 750px;
  height: auto;
  margin: 40px auto;
`

function NetworkNodes({ colonies = [], ubication }) {
  const $container = useRef(null)
  const objLocation = { id: 1, label: 'ME 🙎‍♂️🙎‍♀️', value: 0 }
  const nodesColonies = colonies.map(({ uid, colonia, confirmados }) => ({ id: uid, label: colonia, value: confirmados }))
  const nodesAll = [...nodesColonies, objLocation]
  const edgesRef = colonies.map(({ uid, confirmados }) => ({ from: 1, to: uid, value: confirmados, title: `${confirmados} personas confirmadas` }))
  const options = {
    nodes: {
      shape: "dot",
      scaling: {
        label: {
          min: 5,
          max: 10,
        },
      },
    },
  }
  useEffect(() => {
    const nodes = new DataSet(nodesAll)
    const edges = new DataSet(edgesRef)
    const data = { nodes, edges }
    new Network($container.current, data, options)
  }, [])
  return <Container ref={$container}></Container>
}

export default NetworkNodes