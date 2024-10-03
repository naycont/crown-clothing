import { useContext } from 'react'
import ActionButton from '../globals/action-button/action-button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-dropdown-container__items'>
                { cartItems.map(item => 
                    <CartItem key={item.id} cartItem={item}/> 
                )}
            </div>
            <ActionButton>Go to checkout</ActionButton>
        </div>
    )
}

export default CartDropdown