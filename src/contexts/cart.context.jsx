import { createContext, useState, useEffect } from 'react'

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    } else {
        return [...cartItems, { ...productToAdd, quantity: 1 }]
    }
}

const getTotalCartItems = (cartItems) => {
    const total = cartItems.reduce(
        (accumulator, cartItem) => accumulator + cartItem.quantity,
        0
    )
    return total
}

export const CartContext = createContext({
    isCartDropdownActive: false,
    setIsCartDrowdonwActive: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
})

export const CartProvider = ({ children }) => {
    const [isCartDropdownActive, setIsCartDrowdonwActive] = useState(false)

    const [cartItems, setCartItems] = useState([])
    const addItemToCart = (productToAdd)  => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const [cartCount, setCartCount] = useState(0)
    useEffect(() => {
        setCartCount(getTotalCartItems(cartItems))
    }, [cartItems])

    const value = { isCartDropdownActive,  setIsCartDrowdonwActive, cartItems, addItemToCart, cartCount }

    return <CartContext.Provider  value={value}>
        {children}
    </CartContext.Provider>
}