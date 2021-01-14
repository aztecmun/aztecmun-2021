import './settings'
import firebase from 'firebase/app'
import 'firebase/auth'

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged(onChange)
}

export const signOut = () => {
  return firebase
    .auth()
    .signOut()
    .catch((error) => {
      console.error(error)
    })
}

export const loginWithEmailAndPass = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const createAccountWithEmail = (email, password, name) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      result.user.updateProfile({
        displayName: name,
      })

      const emailConfig = { url: 'https://localhost:3000' }

      result.user.sendEmailVerification(emailConfig).catch((error) => {
        console.error(error)
      })

      return result.user
    })
    .catch((error) => {
      console.error(error)
    })
}
