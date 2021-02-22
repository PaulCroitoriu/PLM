import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyAhECK0OAscXbxFPT3NcIldbGtofLpjZtE",
  authDomain: "plm-shop.firebaseapp.com",
  projectId: "plm-shop",
  storageBucket: "plm-shop.appspot.com",
  messagingSenderId: "176245069256",
  appId: "1:176245069256:web:90c1ddd37c9a4f7623dcfd",
  measurementId: "G-N0TQJ91RQP",
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()
const facebookProvider = new firebase.auth.FacebookAuthProvider()

googleProvider.setCustomParameters({ prompt: "select_account" })
facebookProvider.setCustomParameters({
  display: "popup",
})

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider)

export default firebase
