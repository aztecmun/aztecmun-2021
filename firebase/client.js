// Firebase imports
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
