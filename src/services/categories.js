import { getCollectionAndDocuments } from '../utils/firebase/firebase.utils'

export const getCategories = async () => {
    try {
        const collectionItems = await getCollectionAndDocuments('categories')

        const categories = collectionItems.reduce((previousValue, currentValue) => {
            const { title, items } = currentValue
            previousValue[title.toLowerCase()] = items
            return previousValue
        }, {})

        return categories
    } catch (error) {
        console.error(error)
    }

}