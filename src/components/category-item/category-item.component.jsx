import './category-item.styles.scss'

const CategoryItem = ({category}) => {
    const {id, name, imageUrl} = category
    return (
        <div className='category-container' key={`category-${id}`}>
            <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            ></div>
            <div className='category-body-container'>
                <h2>{name}</h2>
                <p>Shop now</p>
            </div>
        </div>
    )
}

export default CategoryItem