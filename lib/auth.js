import { auth } from 'lib/conection'
import { cleanCookies } from 'helpers/provider'
import router from 'next/router'

export function mapUserFromFirebaseAuth(result) {
  console.log(result)
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
    console.log(error)
  })
}

export function logoutSession() {
  return auth()
    .signOut()
    .then(() => {
      console.log('todo ok')
      cleanCookies()
      router.push('/')
    })
    .catch((error) => {
      console.log('error in Sign out', error.message)
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
