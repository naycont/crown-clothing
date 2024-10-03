import { useContext } from 'react'
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
import './cart-icon.styles.scss'

const CartIcon = () => {
    const { isActive, setIsActive } = useContext(CartContext)

    const toogleCartDropdown = () => setIsActive(!isActive)
    
    return (
        <div className='cart-icon-container' onClick={toogleCartDropdown}>
            <ShopingIcon className='cart-icon-container__shopping-icon'/>
            <span className='cart-icon-container__item-count'>0</span>
        </div>
    )
}

export default CartIcon