import React, { useMemo, useEffect } from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  Circle,
  InfoWindow
} from 'react-google-maps' 
import { useState } from 'react'
import { styles } from 'common/map-style'
import Modal from 'common/modal'
import { UniversalPortal } from '@jesstelford/react-portal-universal'


function Maps({ center, data }) {
  const [state, setState] = useState({ showInfoIndex: '', modal: false })
  const [location, setLocation] = useState(center ? center : {
    lat: 19.0576039,
    lng: -98.2094129
  })
  const [meInfo, setMeInfo] = useState(false)
  const handleToggleOpen = (markerId) => {
    if (state.showInfoIndex === markerId) {
      setState({ showInfoIndex: '', modal: false })
    } else {
      setState({ showInfoIndex: markerId, modal: true })
    }
  }
  const mapClientLocation = (position) =>  {
    setLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    })
  }
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(mapClientLocation)
    } else {
      console.log('El navegador no tiene acceso a la geolocación')
    }
  }, [])
  return (
    <GoogleMap
      defaultZoom={15}
      center={location}
      options={{
        styles: styles
      }}
    > 
      <Circle
        center={location}
        radius={40}
        defaultOptions={{
          strokeColor: "rgba(255,255,255, .5)",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "rgba(255,255,255, .5)",
          fillOpacity: 0.35,
        }}      
      />
      <Marker
        position={location}
        animation="DROP"
        icon={{
          scaledSize: new google.maps.Size(50, 50), // scaled size
          url: '/dot-blue.png'
        }}
        onClick={() => setMeInfo(!meInfo)}
      >
        {meInfo && (
          <InfoWindow>
            <div style={{textAlign: 'center'}}>
              <h2>Me 👥👥🧏‍♂️🧏‍♀️</h2>
              <p style={{fontSize: 18.0, marginTop: 5}}>Mi úbicación en un rango de 50 metros a la redonda</p>
              <p style={{fontSize: 18.0, marginBottom: 5}}>No olvides usar cubrebocas para no estar expuesto</p>
              <p><strong>#MejorQuedateEnCasa</strong></p>
            </div>
          </InfoWindow>
        )}
      </Marker>
      {data.map((colonie, index) => (
        <Marker
          key={colonie.uid}
          label={colonie.confirmados}
          labelStyle={{color: 'blue',}}
          position={{ lat: Number(colonie.lat), lng: Number(colonie.lng) }}
          onClick={() => handleToggleOpen(index)}
        >
          {state.showInfoIndex === index && (
            <UniversalPortal selector="#page-portal">
              <Modal colonies={data} isActive={state.modal} onClose={() => setState({modal: false})} data={colonie} />
            </UniversalPortal>
          )}
        </Marker>
      ))}
    </GoogleMap>
  )
}

export default withScriptjs(withGoogleMap(Maps))