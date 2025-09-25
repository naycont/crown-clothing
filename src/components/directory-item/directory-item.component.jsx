import { BacgroundImage, Body, DirectoryItemContainer } from './directory-item.styles'

const DirectoryItem = ({category}) => {
    const {id, name, imageUrl} = category
    return (
        <DirectoryItemContainer key={`directory-${id}`}>
            <BacgroundImage
                imageUrl={imageUrl}
            ></BacgroundImage>
            <Body>
                <h2>{name}</h2>
                <p>Shop now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem