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

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if (existingCartItem.quantity === 1)
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )    

}

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)

const getTotalCartItems = (cartItems) => {
    const total = cartItems.reduce(
        (accumulator, { quantity }) => accumulator + quantity,
        0
    )
    return total
}

const getTotalCheckout = (cartItems) => {
    const total = cartItems.reduce(
        (accumulator, { quantity, price }) => accumulator + (quantity * price),
        0
    )
    return total
}


export const CartContext = createContext({
    isCartDropdownActive: false,
    setIsCartDrowdonwActive: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    deleteItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
})

export const CartProvider = ({ children }) => {
    const [isCartDropdownActive, setIsCartDrowdonwActive] = useState(false)

    const [cartItems, setCartItems] = useState([])
    const addItemToCart = (productToAdd)  => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        setCartCount(getTotalCartItems(cartItems))
    }, [cartItems])

    useEffect(() => {
        setCartTotal(getTotalCheckout(cartItems))
    }, [cartItems])

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    }

    const value = {
        isCartDropdownActive,
        setIsCartDrowdonwActive,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartCount,
        cartTotal
    }

    return <CartContext.Provider  value={value}>
        {children}
    </CartContext.Provider>
}