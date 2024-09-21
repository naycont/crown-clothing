import './action-button.styles.scss'

const BUTTON_TYPE_CLASSES = {
    inverted: 'inverted',
    'google-sign-in': 'google-sign-in'
}

const ActionButton = ({ children, buttonType, buttonProps }) => {
    const className = BUTTON_TYPE_CLASSES[buttonType] ?  BUTTON_TYPE_CLASSES[buttonType] : '';
    return (
        <button
            className={`button-container ${className}`}
            {...buttonProps}
        >
            {children}
        </button>
    )
}

export default ActionButton