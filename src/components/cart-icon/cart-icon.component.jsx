import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { CartIconContainer, ShopIcon, ItemCount } from './cart-icon.styles.jsx'

const CartIcon = () => {
    const { isCartDropdownActive, setIsCartDrowdonwActive, cartCount } = useContext(CartContext)

    const toogleCartDropdown = () => setIsCartDrowdonwActive(!isCartDropdownActive)
    
    return (
        <CartIconContainer onClick={toogleCartDropdown}>
            <ShopIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon