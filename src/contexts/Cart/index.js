import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const CartContext = createContext([]);

export function CartProvider({ children }) {

  const [total, setTotal] = useState(0)
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) != null
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  )

  useEffect(()=> {
    let sum = 0

    cart.map((cart) => (
      sum = parseFloat(sum) + parseFloat(cart.card_prices[0].amazon_price))
    )
  
    setTotal(sum)
  }, [cart])

  function handleAddCart(card) {

    const newCard = {
      ...card,
      idCard: uuidv4()
    }

    setCart([...cart, newCard])
    localStorage.setItem("cart", JSON.stringify([...cart, card]));
    alert('Adicionado no carrinho')
  }

  function handleRemoveItemInCart(idCard) {
    const cartFiltered = cart.filter(item => {
      if (item.idCard === idCard) {
        return false
      } else {
        return true
      }
    })
    setCart(cartFiltered)
    localStorage.setItem("cart", JSON.stringify(cartFiltered));
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addItem: handleAddCart,
        removeItem: handleRemoveItemInCart,
        total
      }}>
      {children}
    </CartContext.Provider>
  )
}