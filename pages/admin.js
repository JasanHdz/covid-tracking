import Wrapper from 'common/wrapper'
import Navigation from 'common/menu/navigation'
import { getSession, withAuth } from 'helpers/session'
import User from 'components/dashboard/user'
import ColoniesList from 'components/dashboard/colonies-list'
import Places from 'lib/database/places'

function Admin({ places, payload }) {
  return (
    <>
      <Wrapper>
        <User photoURL={payload.photoURL} userName={payload.userName} />
        <ColoniesList places={places} />
      </Wrapper>
      <Navigation />
    </>
  )
}

export async function getServerSideProps(context) {
  withAuth(context)
  const session = getSession(context.req)
  const places = await new Places().getCollection()
  return {
    props: {
      places,
      ...session
    }
  }
}

export default Admin
