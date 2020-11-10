import BottomNavigation from 'common/menu/bottom-navigation'
import Wrapper from 'common/google-maps/wrapper'
import Map from "common/map"
import Navigation from 'common/menu/navigation'
import Places from 'lib/database/places'
import { useMemo } from 'react'

const URL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.GOOGLE_MAPS_API_KEY}`
const defaultMapOptions = {
  fullscreenControl: false,
} 

function Index(props) {
  console.log(props)
  return (
    <>
      <Map
        googleMapURL={URL}
        loadingElement={<p>Cargando...</p>}
        mapElement={<div style={{ height: '100%' }} />}
        containerElement={<Wrapper />}
        defaultOptions={defaultMapOptions}
      />
      <Navigation />
      <BottomNavigation />
    </>
  )
}

export async function getServerSideProps(context) {
  const places = new Places()
  const data = await places.getCollection()
  return {
    props: {
      data,
    }
  }
}

export default Index;