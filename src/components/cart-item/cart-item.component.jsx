import './cart-item.styles.scss'

const CartItem = ({cartItem})  => {
    const { name, quantity, imageUrl, price } = cartItem
    return (
        <div className='cart-item-container'>
            <img className='cart-item-container__image' src={imageUrl} alt={name} />
            <div className='cart-item-container__item-details'>
                <span className='cart-item-container__item-details--name'>{name}</span>
                <span>{quantity}</span>
                <span>{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem