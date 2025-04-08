import { CategoryContainer, CategoryTitle, CategoryContent } from './category-preview.styles.jsx'

import ProductCard from '../product-card/product-card.component'

const CategoryPreview = ({title, products}) => {
    return (
        <CategoryContainer>
            <h2>
                <CategoryTitle to={`/shop/${title}`}>
                    {title.toUpperCase()}
                </CategoryTitle>
            </h2>
            <CategoryContent>
                {
                    products.filter((_, idx) => (idx < 4))
                    .map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </CategoryContent>
        </CategoryContainer>
    )
}

export default CategoryPreview