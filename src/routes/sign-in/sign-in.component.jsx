import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import { createUser } from "../../services/users"

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        console.log(user)
        const userDocRef = await createUser(user)
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