import { createContext, useState } from 'react'

export const CartContext = createContext({
    isActive: false,
    setIsActive: () => {}
})

export const CartProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false)
    const value = { isActive,  setIsActive}

    return <CartContext.Provider  value={value}>
        {children}
    </CartContext.Provider>
}