import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import { onAuthStateChanged } from 'lib/auth'

export const UserContext = React.createContext();
const cookies = new Cookies()

export function cleanCookies() {
  cookies.remove('user_token', { path: '/' })
  cookies.remove('user_payload', { path: '/' })
}

function Provider({ children }) {
  const [state, setState] = useState(null)
  const options = { expires: new Date().now * 1000 + 3600, path: '/' }
  const handleState = (user) => {
    if (user) {
      // save user credentials in cookie
      if (!cookies.get('user_token')) {
        cookies.set('user_token', `Bearer ${user.token}`, options)
        cookies.set('user_payload', user.payload)
        setState(user)
      } else {
        setState({
          token: cookies.get('user_token'),
          payload: cookies.get('user_payload')
        })
      }
    } else {
      // remove credentials of cookie
      cleanCookies()
    }
  }

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(handleState)
    return () => unsuscribe()
  }, [])

  return <UserContext.Provider value={{ state, setState }}>{children}</UserContext.Provider>
}

export default Provider