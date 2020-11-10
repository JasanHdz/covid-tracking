import Navigation from 'common/menu/navigation'
import Form from 'components/login/form'
import Grid from 'components/login/grid'
import Hero from 'components/login/hero'

function Login() {
  return (
    <Grid>
      <Form />
      <Hero />
      <Navigation />
    </Grid>
  )
}

export default Login