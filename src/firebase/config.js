import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBZmdPLsSR5Ml_z6kur6UnNxx-p2e5G0JE',
  authDomain: 'my-website-496fe.firebaseapp.com',
  projectId: 'my-website-496fe',
  storageBucket: 'my-website-496fe.appspot.com',
  messagingSenderId: '415051341523',
  appId: '1:415051341523:web:d7c21cd496ffaffafe7e26',
  measurementId: 'G-8TWRWXLXX4',
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }