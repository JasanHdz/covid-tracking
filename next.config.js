const withOffline = require('next-offline')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
const path = require('path')

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  target: 'serverless',
  experimental: {
    reactRefresh: true,
  },
  // env: {
  //   GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  // },
  transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  // generateInDevMode: true,
  workboxOpts: {
    swDest: path.join(__dirname, 'public/service-worker.js'),
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}

module.exports = withMDX(withOffline(nextConfig))
