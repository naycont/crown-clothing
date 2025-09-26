import { BacgroundImage, Body, DirectoryItemContainer } from './directory-item.styles'
import { useNavigate } from 'react-router-dom'  

const DirectoryItem = ({category}) => {
    const {id, name, imageUrl, route } = category
    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)

    return (
        <DirectoryItemContainer key={`directory-${id}`} onClick={onNavigateHandler}>
            <BacgroundImage
                imageUrl={imageUrl}
            ></BacgroundImage>
            <Body>
                <h2>{name.toUpperCase()}</h2>
                <p>Shop now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem