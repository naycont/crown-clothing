import SignUpForm from '../../components/sign-up/sign-up-component'
import ActionButton from '../../components/globals/action-button/action-button.component'
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import { createUser } from "../../services/users"

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        await createUser(user)
    }
    return (
        <div>
            <ActionButton
                buttonType='google-sign-in'
                onClick={logGoogleUser}
            >
                Sign in
            </ActionButton>
            <SignUpForm/>
        </div>
    )
}

export default SignIn