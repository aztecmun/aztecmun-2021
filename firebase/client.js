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

export const createAccountWithEmail = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      createUserProfile({
        userId: result.user.uid,
        name: '',
        school: '',
        committee: '',
        grade: '',
        group: '',
        age: '',
        phone: '',
        email: result.user.email,
        role: 'delegate',
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

const createUserProfile = (obj) => {
  return db.collection('usersProfiles').add({
    userId: obj.userId,
    name: obj.name,
    school: obj.school,
    committee: obj.committee,
    grade: obj.grade,
    group: obj.group,
    age: obj.age,
    phone: obj.phone,
    email: obj.email,
    role: obj.role,
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

export const updateUserProfile = (obj) => {
  return db.collection('usersProfiles').doc(obj.profileId).update({
    name: obj.name,
    school: obj.school,
    committee: obj.committee,
    grade: obj.grade,
    group: obj.group,
    age: obj.age,
    phone: obj.phone,
    email: obj.email,
  })
}

const mapProfilesFormFirebaseToObject = (doc) => {
  const data = doc.data()
  const profileId = doc.id

  return { profileId, ...data }
}

export const queryAllProfiles = (callback) => {
  return db
    .collection('usersProfiles')
    .where('role', '==', 'delegate')
    .onSnapshot(({ docs }) => {
      const newProfile = docs.map(mapProfilesFormFirebaseToObject)
      callback(newProfile)
    })
}
