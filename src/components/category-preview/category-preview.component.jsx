import './category-preview.styles.scss'
import { Link } from 'react-router-dom'

import ProductCard from '../product-card/product-card.component'

const CategoryPreview = ({title, products}) => {
    return (
        <div className='category-preview'>
            <h2>
                <Link className='category-preview__title' to={`/shop/${title}`}>
                    {title.toUpperCase()}
                </Link>
            </h2>
            <div className='category-preview__content'>
                {
                    products.filter((_, idx) => (idx < 4))
                    .map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    )
}

export default CategoryPreview