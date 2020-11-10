import Wrapper from 'common/google-maps/wrapper'
import Navigation from 'common/menu/navigation'
import { getSession, withAuth } from 'helpers/session'

function Admin({ token, payload }) {
  return (
    <>
      <Wrapper>
        {token && (
          <>
            <p>Hola {payload.userName} nos da gusto tenerlo por acá</p>
            <img src={payload.photoURL} alt="avatar" />
          </>
        )}
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
