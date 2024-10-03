import { useContext } from 'react'
import ActionButton from '../globals/action-button/action-button.component'
import { CartContext } from '../../contexts/cart.context'
import './product-card.styles.scss'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)
    
    return (
        <div className='product-card-container'>
            <img className='product-card-container__image' src={imageUrl} alt={`${name}`}/>
            <div className='product-card-container__footer'>
                <span className='product-card-container__footer--name'>{name}</span>
                <span className='product-card-container__footer--price'>{price}</span>
            </div>
            <ActionButton buttonType='inverted' onClick={addProductToCart}>Add to card</ActionButton>
        </div>
    )
}

export default ProductCard