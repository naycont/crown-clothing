import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const db = getFirestore()

export const createUser = async (userAuth) => {
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