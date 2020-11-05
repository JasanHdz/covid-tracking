import Document, {
  Html, Head, Main, NextScript,
} from 'next/document'
import { ServerPortal } from '@jesstelford/react-portal-universal/server'
 

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const portals = new ServerPortal()
    const { html, ...initialProps } = await Document.getInitialProps(ctx)
    const htmlWithPortals = portals.appendUniversalPortals(html)
    return {
      ...initialProps,
      html: htmlWithPortals
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#2DBB54" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" sizes="57x57" href="/icons/57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/icons/60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/icons/72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/icons/76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/icons/114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/icons/120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/icons/144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/180.png" />
          <link rel="icon" type="image/png" sizes="196x196" href="/icons/196.png" />
          <link rel="icon" type="image/png" sizes="100x100" href="/icons/100.png" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}