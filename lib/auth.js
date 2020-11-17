import { auth } from 'lib/conection'
import { cleanCookies } from 'helpers/provider'
import router from 'next/router'

export function mapUserFromFirebaseAuth(result) {
  return {
    token: result.ya,
    payload: {
      uid: result.uid,
      userName: result.displayName,
      email: result.email,
      photoURL: result.photoURL,
      metadata: result.metadata
    }
  }
}

export function loginWithGoogle() {
  const provider = new auth.GoogleAuthProvider()
  const params = new URLSearchParams(window.location.search)
  return auth()
    .signInWithPopup(provider)
    .then(() => {
      if (params.has('next')) {
        router.push(params.get('next'))
      } else {
        router.push('/')
      }
    })
    .catch((error) => {
    console.error(error)
  }) 
}

export function loginWithEmailAndPassword() {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((error) => {
    console.error(error)
  })
}

export function logoutSession(setUser) {
  return auth()
    .signOut()
    .then(() => {
      cleanCookies()
      router.push('/')
      setUser(null)
    })
    .catch((error) => {
      console.error('error in Sign out', error.message)
    })
}

export function onAuthStateChanged(onChange) {
  return auth()
    .onAuthStateChanged(result => {
      if(!result) return
      const normalizedUser = mapUserFromFirebaseAuth(result)
      onChange(normalizedUser)
    })
}
