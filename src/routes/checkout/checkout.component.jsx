import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'
import CheckoutItem from  '../../components/checkout-item/checkout-item.component'

import { CheckoutContainer, CheckoutHeader, HeaderBlock, TotalCheckout } from './checkout.styles.jsx'

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>

            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))
            }
        <TotalCheckout className='total'>Total $ {cartTotal}</TotalCheckout>
    </CheckoutContainer>
    )
}

export default Checkout