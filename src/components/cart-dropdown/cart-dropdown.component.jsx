import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ActionButton from '../globals/action-button/action-button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckout = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                { cartItems.length ? (
                        cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
                    )
                    : (<EmptyMessage>Your cart is empty</EmptyMessage>)
                }
               
            </CartItems>
            <ActionButton
                onClick={goToCheckout}
            >
                Go to checkout
            </ActionButton>
        </CartDropdownContainer>
    )
}

export default CartDropdown