import ActionButton from '../globals/action-button/action-button.component'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-dropdown-container__items'></div>
            <ActionButton>Go to checkout</ActionButton>
        </div>
    )
}

export default CartDropdown