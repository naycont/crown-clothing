import './directory-item.styles.scss'

const DirectoryItem = ({category}) => {
    const {id, name, imageUrl} = category
    return (
        <div className='directory-item' key={`directory-${id}`}>
            <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            ></div>
            <div className='directory-body-container'>
                <h2>{name}</h2>
                <p>Shop now</p>
            </div>
        </div>
    )
}

export default DirectoryItem