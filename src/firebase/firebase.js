import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    authDomain: "todo-app-riyazur-razak.firebaseapp.com",
    databaseURL: "https://todo-app-riyazur-razak.firebaseio.com",
    projectId: "todo-app-riyazur-razak",
    storageBucket: "todo-app-riyazur-razak.appspot.com",
    messagingSenderId: "773134348255",
    appId: process.env.REACT_APP_APP_ID
  };


  const firebaseapp = firebase.initializeApp(firebaseConfig)

  const db = firebaseapp.firestore();


  export default db;