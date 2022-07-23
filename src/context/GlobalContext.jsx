import useLocalStorage from "hooks/useLocalStorage";
import { useReducer } from "react";
import { createContext } from "react";

const ACTIONS = {
  ADD_PRODUCT_TO_CART: "add_product_to_cart",
  REMOVE_PRODUCT_FROM_CART: "remove_product_from_cart",
  ADD_PRODUCT_TO_WISHLIST: "add_product_to_wishlist",
  REMOVE_PRODUCT_FROM_WISHLIST: "remove_product_from_wishlist",
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.REMOVE_PRODUCT_FROM_CART:
     
      return {

      };

    default:
      return state;
  }
};

export const GlobalContext = createContext({});

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, {
    cartItems: useLocalStorage("userCart", []),
    wishList: useLocalStorage("userWishList", []),
  });

  


  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}

export default GlobalContext;
