import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../utils/firebase/firebase.utils'
import { createUser } from "../../services/users"
import FormInput from '../globals/form-input/form-input.component'
import ActionButton from '../globals/action-button/action-button.component'
import './sign-up.styles.scss'
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const handleInputChange = (event)  => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords do not match')
            return;
        }
        
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            if (response?.user) {
                const { user } =  response
                user.displayName = displayName
                await createUser(user)
            }
        } catch (error) {
            if (error.code === 'auth/email-already-in-use'){
                alert('cannot create user, email already in use')
            } else {
                console.error('error while signing up user with email and password')
                console.error(error)
                console.log(error.code)
            }
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with you email and password</span>
            <form onSubmit={handleFormSubmit}>
                <FormInput
                    label='Display name'
                    inputProps={
                        {
                            type: 'text',
                            name: 'displayName',
                            value: displayName,
                            required: true,
                            onChange: handleInputChange
                        }
                    }
                    
                />

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

                <FormInput
                    label='Confrim password'
                    inputProps={
                        {
                            name: 'confirmPassword',
                            value: confirmPassword,
                            required: true,
                            onChange: handleInputChange
                        }
                    }
                />

                <ActionButton type='submit'>Sign up</ActionButton>
            </form>
        </div>
    )
}

export default SignUpForm