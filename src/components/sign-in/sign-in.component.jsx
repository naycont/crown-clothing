import { useState } from 'react'
import FormInput from '../globals/form-input/form-input.component'
import ActionButton from '../globals/action-button/action-button.component'
import { signInWithGooglePopup, auth } from '../../utils/firebase/firebase.utils'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { createUser } from '../../services/users'
import './sign-in.styles.scss'

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const handleInputChange = (event)  => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const handleFormSubmit = async (event) => {
        console.log('handleFormSubmit')
        event.preventDefault();

        try {
           const response = await signInWithEmailAndPassword(auth, email, password)
           console.log(response)
        } catch (error) {
            let errorMessage = '';
            switch (error.code) {
                case 'auth/wrong-password': 
                    errorMessage = 'incorrect password for email'
                break;
                case 'auth/user-not-found':
                    errorMessage = 'not user associated with this email'
                break;
                default: 
                    console.error('error while signin in user with email and password')
                    console.error(error)
                    errorMessage = 'Error on sign in service'
            }
            alert(errorMessage) 
        }
    }

    const signInWithGoogle = async () => {
        console.log('signInWithGoogle')
        const { user } = await signInWithGooglePopup()
        await createUser(user)
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with you email and password</span>
            <form onSubmit={handleFormSubmit}>
                <FormInput
                    label='Email'
                    inputProps={
                        {
                            type: 'email',
                            name: 'email',
                            value: email,
                            required: true,
                            onChange: handleInputChange
                        }
                    }
                />

                <FormInput
                    label="Password"
                    inputProps={
                        {
                            type: 'password',
                            name: 'password',
                            value: password,
                            required: true,
                            onChange: handleInputChange
                        }
                    }
                />

                <div className='action-buttons-container'>
                    <ActionButton type='submit'>
                        Sign in
                    </ActionButton>

                    <ActionButton
                        type='button'
                        buttonType='google-sign-in'
                        onClick={signInWithGoogle}
                    >
                        Google Sign in
                    </ActionButton>
                </div>
            </form>
        </div>
    )
}

export default SignInForm