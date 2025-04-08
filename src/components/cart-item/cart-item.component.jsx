import { CartItemContainer, CartItemImage, ItemDetails, ItemDetailsName } from './cart-item.styles.jsx'

const CartItem = ({cartItem})  => {
    const { name, quantity, imageUrl, price } = cartItem
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={name} />
            <ItemDetails>
                <ItemDetailsName>{name}</ItemDetailsName>
                <span>{quantity}</span>
                <span>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem