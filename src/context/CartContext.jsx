import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])


    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }))
        } else {
            setCart([...cart, { ...item, quantity}])
        }
    }

    console.log(cart)
    
    const clearCart = () => setCart([])
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false
    
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))
  



    return (
    <CartContext.Provider value={{
        addProduct,
        clearCart,
        isInCart,
        removeProduct,
        cart
    }}>
        {children}
    </CartContext.Provider>
    )

}
export default CartContext