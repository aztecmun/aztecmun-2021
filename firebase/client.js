import firebase from 'firebase/app'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDFtaLUOYVBplfairoBowo9Fc0YRuHkr9c',
  authDomain: 'aztecmun-2a3ec.firebaseapp.com',
  projectId: 'aztecmun-2a3ec',
  storageBucket: 'aztecmun-2a3ec.appspot.com',
  messagingSenderId: '630465470366',
  appId: '1:630465470366:web:a6f101362a3930d925408f',
  measurementId: 'G-SPZCX8RR0X',
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

export const LoginWithEmail = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const onAuthStateChange = (onChange) => {
  return firebase.auth().onAuthStateChanged(onChange)
}

export const loginWhitEmailAndPass = (email, password) => {
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
