import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

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

const db = firebase.firestore()

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
    })
    .catch((error) => {
      console.error(error)
    })
}

export const createUserProfile = ({
  userId,
  name,
  age,
  school,
  grade,
  group,
}) => {
  return db.collection('usersProfiles').add({
    userId: userId,
    name: name,
    age: age,
    school: school,
    grade: grade,
    group: group,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  })
}

export const queryUserProfile = (userId) => {
  return db
    .collection('usersProfiles')
    .where('userId', '==', userId)
    .limit(1)
    .get()
    .then((querySnapshot) => {
      return querySnapshot.docs[0].data()
    })
}
