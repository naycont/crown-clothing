import { useState } from 'react'
import FormInput from '../globals/form-input/form-input.component'
import ActionButton, { BUTTON_TYPE_CLASSES } from '../globals/action-button/action-button.component'
import { signInWithGooglePopup, auth } from '../../utils/firebase/firebase.utils'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { SignInContainer, Title, ActionButtonContainer } from './sign-in.styles.jsx'

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
        event.preventDefault();
        
        try {
           await signInWithEmailAndPassword(auth, email, password)
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

    const signInWithGoogle = async (event) => {
        event.preventDefault();
        await signInWithGooglePopup()
    }

    return (
        <SignInContainer>
            <Title>Already have an account?</Title>
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

                <ActionButtonContainer>
                    <ActionButton
                        type='submit'
                    >
                        Sign in
                    </ActionButton>

                    <ActionButton
                        type='button'
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        onClick={signInWithGoogle}
                    >
                        Google Sign in
                    </ActionButton>
                </ActionButtonContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm