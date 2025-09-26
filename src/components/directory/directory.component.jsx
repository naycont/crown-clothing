import DirectoryItem from '../directory-item/directory-item.component'
import { DirectoryContainer } from  './directory.styles.jsx'

const categories = [
  {
    id: 1,
    name: 'Hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    route: 'shop/hats'
  },
  {
    id: 2,
    name: 'Jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/jackets'
  },
  {
    id: 3,
    name: 'Sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/sneakers'
  },
  {
    id: 4,
    name: 'Women',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/women'
  },
  {
    id: 5,
    name: 'Men',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'shop/men'
  }
]

const Directory = () => {
  return (
    <DirectoryContainer>
        {categories.map(category => (
            <DirectoryItem
                key={category.id}
                category={category}
            />
        ))}
    </DirectoryContainer>
  )
}

export default Directory