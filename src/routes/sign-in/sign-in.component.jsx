import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        console.log(user)
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(userDocRef)
    }
    return (
        <div>
            this is sign in component
            <button onClick={logGoogleUser}>Sign in</button>
        </div>
    )
}

export default SignIn