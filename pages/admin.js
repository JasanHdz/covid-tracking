import Wrapper from 'common/wrapper'
import Navigation from 'common/menu/navigation'
import { getSession, withAuth } from 'helpers/session'
import User from 'components/dashboard/user'
import Search from 'components/dashboard/search'
import ColoniesList from 'components/dashboard/colonies-list'

function Admin({ token, payload }) {
  return (
    <>
      <Wrapper>
        <User photoURL={payload.photoURL} userName={payload.userName} />
        <Search placeholder="Buscar colonia..." />
        <ColoniesList />
      </Wrapper>
      <Navigation />
    </>
  )
}

export async function getServerSideProps(context) {
  withAuth(context)
  const session = getSession(context.req)
  return {
    props: {
      ...session
    }
  }
}

export default Admin
