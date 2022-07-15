import React from "react";
import useLocalStorage from "hooks/useLocalStorage";

export const CartContext = React.createContext({});

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("userCart", []);
  console.log(cartItems);

  /**
   * If the product exists in the cart, then increase the quantity by 1, otherwise add the product to
   * the cart.
   */
  const onAdd = (product) => {
    const exist = cartItems.find((prodCart) => prodCart.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((prodCart) =>
          prodCart.id === product.id
            ? { ...exist, qty: exist.qty + 1 }
            : prodCart
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  /**
   * If the product exists in the cart, then remove it from the cart. If the product doesn't exist in the
   * cart, then add it to the cart.
   */
  const onRemove = (product) => {
    const exist = cartItems.find((prodCart) => prodCart.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((prodCart) => prodCart.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((prodCart) =>
          prodCart.id === product.id
            ? { ...exist, qty: exist.qty - 1 }
            : prodCart
        )
      );
    }
  };

  /**
   * If the product exists in the cart, remove it from the cart.
   */
  const onRemoveAll = (product) => {
    const exist = cartItems.find((prodCart) => prodCart.id === product.id);
    if (exist) {
      setCartItems(cartItems.filter((prodCart) => prodCart.id !== product.id));
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, onAdd, onRemove, onRemoveAll }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
