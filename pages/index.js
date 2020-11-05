import BottomNavigation from 'common/menu/bottom-navigation'
import Wrapper from 'common/google-maps/wrapper'
import Map from "common/map"
import Navigation from 'common/menu/navigation'

const API_KEY = 'AIzaSyD6um7DFFzTaqXG7uGCM1WJkIhvF3E7X34'
const URL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${API_KEY}`
const defaultMapOptions = {
  fullscreenControl: false,
} 

function Index() {
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

export default Index;