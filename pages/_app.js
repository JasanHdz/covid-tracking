import { ThemeProvider } from 'styled-components'
import { prepareClientPortals } from '@jesstelford/react-portal-universal'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import { CookiesProvider } from 'react-cookie'
import theme from 'utils/theme'
import BaseStyles from 'components/base-styles'

if (typeof window !== 'undefined') {
  // On the client, we have to run this once before React attempts a render.
  // Here in _app is a great place to do it as this file is only required once,
  // and right now (outside the constructor) is before React is invoked.
  prepareClientPortals()
}

Router.onRouterChangeStart = () => {
  NProgress.start()
}

Router.onRouterChangeComplete = () => {
  NProgress.done()
}

Router.onRouterChangeError = () => {
  NProgress.done()
}

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>Covid-19 Tracking, La APP que te da el seguimiento del virus sars cov 2 cerca de tí</title>
      </Head>
      <BaseStyles theme={{}} />
      <CookiesProvider>
        <>
          <Component {...pageProps} />
          <div id="page-portal" />
        </>
      </CookiesProvider>
    </ThemeProvider>
  )
}

export default App