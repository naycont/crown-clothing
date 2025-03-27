import { createContext, useEffect, useState } from "react";
import { getCategories } from '../services/categories'

export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categories= await getCategories()
            setCategoriesMap(categories)
        }
        getCategoriesMap()
    }, [])

    const value = { categoriesMap }

    return <CategoriesContext.Provider value={value}>
        {children}
    </CategoriesContext.Provider>
}