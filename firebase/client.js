// Firebase imports
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// SweetAlert imports
import Swal from 'sweetalert2'

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

// Firestore datadase initialization
const db = firebase.firestore()

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged(onChange)
}

export const signOut = () => {
  return firebase
    .auth()
    .signOut()
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Error al cerrar sesión',
        text: error.message,
      })
      console.error(error)
    })
}

export const loginWithEmailAndPass = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión',
        text: error.message,
      })
      console.error(error)
    })
}

export const createAccountWithEmail = (email, password, name) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      result.user.updateProfile({
        displayName: name,
      })

      createUserProfile({
        userId: result.user.uid,
        name: result.user.displayName,
        age: '',
        school: '',
        grade: '',
        group: '',
      })

      const emailConfig = { url: 'https://localhost:3000/profile' }

      result.user.sendEmailVerification(emailConfig).catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al enviar email',
          text:
            'Ha ocurrido un error al enviar el email de verificación. Por favor, contacta a la secretaría digital.',
        })
        console.error(error)
      })
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Error al crear el usuario',
        text: error.message,
      })
      console.error(error)
    })
}

const createUserProfile = ({ userId, name, age, school, grade, group }) => {
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

export const queryUserProfile = (userId, callback) => {
  return db
    .collection('usersProfiles')
    .where('userId', '==', userId)
    .limit(1)
    .onSnapshot((querySnapshot) => {
      const profileId = querySnapshot.docs[0].id
      const data = querySnapshot.docs[0].data()
      const profile = { profileId, ...data }

      callback(profile)
    })
}

export const updateUserProfile = ({
  profileId,
  name,
  age,
  school,
  grade,
  group,
}) => {
  return db.collection('usersProfiles').doc(profileId).update({
    name: name,
    age: age,
    school: school,
    grade: grade,
    group: group,
  })
}
