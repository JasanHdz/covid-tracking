import React, { useMemo } from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps' 
import json from 'mock.json';
import { useState } from 'react'
import { styles } from 'common/map-style'
import Modal from 'common/modal'
import { UniversalPortal } from '@jesstelford/react-portal-universal'

function Maps(props) {
  const data = json
  const [state, setState] = useState({ showInfoIndex: '', modal: false })
  function handleToggleOpen(markerId) {
    if (state.showInfoIndex === markerId) {
      setState({ showInfoIndex: '', modal: false })
    } else {
      setState({ showInfoIndex: markerId, modal: true })
    }
  }
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 19.0572039, lng: -98.2084129 }}
      options={{
        styles: styles
      }}
    >
      {data.map((location, index) => (
        <Marker
          key={index}
          label={location.data.confirmados}
          labelStyle={{color: 'blue',}}
          position={{ lat: Number(location.lat), lng: Number(location.lng) }}
          onClick={() => handleToggleOpen(index)}
        >
          {state.showInfoIndex === index && (
            <UniversalPortal selector="#page-portal">
              <Modal isActive={state.modal} onClose={() => setState({modal: false})} location={location} />}
            </UniversalPortal>
          )}
        </Marker>
      ))}
    </GoogleMap>
  )
}

export default withScriptjs(withGoogleMap(Maps))