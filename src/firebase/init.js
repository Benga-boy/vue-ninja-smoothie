import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyD9kGpPyR1ypKkG1h1zkI3__OXRoNwIziQ',
  authDomain: 'ninja-smoothies-b739a.firebaseapp.com',
  databaseURL: 'https://ninja-smoothies-b739a.firebaseio.com',
  projectId: 'ninja-smoothies-b739a',
  storageBucket: 'ninja-smoothies-b739a.appspot.com',
  messagingSenderId: '480973558081',
  appId: '1:480973558081:web:626cf86680772e833891c0',
  measurementId: 'G-BQGZMYQWL1'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

// * export firestore database

export default firebaseApp.firestore()
