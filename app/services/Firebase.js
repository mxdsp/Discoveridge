import * as firebase from 'firebase'

var config = {
  apiKey: "**********************'",
  authDomain: "**********************",
  databaseURL: "**********************",
  projectId: "**********************",
  storageBucket: "**********************",
  messagingSenderId: "**********************"
}

export const firebaseRef = firebase.initializeApp(config)

// export default class Firebase {

//   static auth

//   static init() {
//     firebase.initializeApp(config)
//     Firebase.auth = firebase.auth()
//   }


// }
