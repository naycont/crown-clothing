import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup ,GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD_G03G5zf0ht3Btalh1CGKVwQCnUf63VQ",
  authDomain: "crwn-db-5d14c.firebaseapp.com",
  projectId: "crwn-db-5d14c",
  storageBucket: "crwn-db-5d14c.appspot.com",
  messagingSenderId: "374305648701",
  appId: "1:374305648701:web:602e3732c0186824de7a54",
  measurementId: "G-NVK487ZEBG"
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()
