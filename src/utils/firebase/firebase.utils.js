import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup ,GoogleAuthProvider } from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD_G03G5zf0ht3Btalh1CGKVwQCnUf63VQ",
  authDomain: "crwn-db-5d14c.firebaseapp.com",
  projectId: "crwn-db-5d14c",
  storageBucket: "crwn-db-5d14c.appspot.com",
  messagingSenderId: "374305648701",
  appId: "1:374305648701:web:602e3732c0186824de7a54",
  measurementId: "G-NVK487ZEBG"
};

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocref = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocref)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocref, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.error('error while creating user')
      console.error(error)
    }
  }

  return userDocref;
}