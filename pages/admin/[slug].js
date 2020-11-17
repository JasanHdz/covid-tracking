import { getSession, withAuth } from 'helpers/session'
import Wrapper from 'common/wrapper'
import AppBar from 'components/dashboard/app-bar' 
import UpdateForm from 'components/dashboard/update-form'
import Places from 'lib/database/places'
import Error from 'next/error'

function PlaceSlug({ token, payload, place, statusCode }) {
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <>
      <AppBar avatar={payload.photoURL} />
      <Wrapper>
        <UpdateForm place={place} />
      </Wrapper>
    </>
  )
}

export async function getServerSideProps(ctx) {
  withAuth(ctx)
  const session = getSession(ctx.req)
  const slug = ctx.query.slug
  const place = await new Places().getCollectionById(slug)
  if (!place) {
    ctx.res.statusCode = 404
    return { props: { statusCode: 404 } }
  }
  return {
    props: {
      ...session,
      place,
      statusCode: 200,
    }
  }
}

export default PlaceSlug