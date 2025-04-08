import { BaseButton, GoogleSingInButton, InvertedButton } from './action-button.styles.jsx'

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    inverted: 'inverted',
    google: 'google-sign-in'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSingInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
    }[buttonType]    
)

const ActionButton = ({ children, buttonType, ...buttonProps }) => {
    const CustomButton = getButton(buttonType)
    return (
        <CustomButton
            {...buttonProps}
        >
            {children}
        </CustomButton>
    )
}

export default ActionButton