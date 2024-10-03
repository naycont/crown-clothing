import { createContext, useState } from 'react'

export const CartContext = createContext({
    isCartDropdownActive: false,
    setIsCartDrowdonwActive: () => {}
})

export const CartProvider = ({ children }) => {
    const [isCartDropdownActive, setIsCartDrowdonwActive] = useState(false)
    const value = { isCartDropdownActive,  setIsCartDrowdonwActive}

    return <CartContext.Provider  value={value}>
        {children}
    </CartContext.Provider>
}