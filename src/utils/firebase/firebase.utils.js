import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { getFirestore, doc, collection, writeBatch, query, getDocs } from 'firebase/firestore'

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field = 'title') => {
  try {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach(object => {
      const docRef = doc(collectionRef, object[field].toLowerCase())
      batch.set(docRef, object)
    })

    await batch.commit()

  } catch (error) {
    console.error('error')
    console.error(error)
  }
} 

export const getCollectionAndDocuments = async (collectionKey) => {
    const collectionRef = collection(db, collectionKey)
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)

    const categoryMap = querySnapshot.docs.map((docSnapshot) => docSnapshot.data())
    
    return categoryMap
}
export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)