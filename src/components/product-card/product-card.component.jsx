import './product-card.styles.scss'
import ActionButton from '../globals/action-button/action-button.component'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    return (
        <div className='product-card-container'>
            <img className='product-card-container__image' src={imageUrl} alt={`${name}`}/>
            <div className='product-card-container__footer'>
                <span className='product-card-container__footer--name'>{name}</span>
                <span className='product-card-container__footer--price'>{price}</span>
            </div>
            <ActionButton buttonType='inverted'>Add to card</ActionButton>
        </div>
    )
}

export default ProductCard