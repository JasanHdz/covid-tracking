import Cookies from 'universal-cookie'
import Router from 'next/router'

export function getCookies(request) {
  if (request) {
    const cookies = new Cookies(request.headers.cookie)
    return cookies.getAll()
  }
  const cookies = new Cookies()
  return cookies.getAll()
}

export function getSession(request) {
  const { user_payload: payload, user_token: token } = getCookies(request)
  if(!token) return null
  return {
    token,
    payload
  }
}

export function withAuth(context) {
  const { user_token } = getCookies(context.req)
  if (user_token) {
    console.log('tiene token')
  } else {
    console.log(context.resolvedUrl, 'resolvedUrl')
    const location = context.resolvedUrl !== '/' ? `/login?next=${context.resolvedUrl}` : '/login'
    redirect(location, context)
  }
}

export function redirect(location, context) {
  if (context.req) {
    context.res.writeHead(302, { Location: location })
    context.res.end()
  } else {
    Router.push(location)
  }
}

export function getIp(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.end()
  return ip
}
