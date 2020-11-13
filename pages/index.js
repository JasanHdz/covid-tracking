import BottomNavigation from 'common/menu/bottom-navigation'
import Wrapper from 'common/google-maps/wrapper'
import Map from "common/map"
import Navigation from 'common/menu/navigation'
import Places from 'lib/database/places'
import geoIp from 'geoip-lite'

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
        location={props.location}
      />
      <Navigation background="white" />
      <BottomNavigation />
    </>
  )
}

export async function getServerSideProps(context) {
  const { req, } = context
  const places = new Places()
  const data = await places.getCollection()
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  const geo = geoIp.lookup(ip)
  const isNull = geo === null;

  const location = {
    lat: isNull ? null : geo.ll[0],
    lng: isNull ? null : geo.ll[1]
  }
  return {
    props: {
      data,
      location: geo !== null ? location : null 
    }
  }
}

export default Index;