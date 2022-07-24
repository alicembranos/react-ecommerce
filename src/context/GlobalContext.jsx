import { useReducer, createContext, useEffect } from "react";
import {
  addItemCart,
  getLocalStorage,
  removeAllItemCart,
  removeItemCart,
  setLocalStorage,
  toggleItemWishList,
} from "services/functions";
import swal from "sweetalert";

const ACTIONS = {
  ADD_PRODUCT_TO_CART: "add_product_to_cart",
  REMOVE_PRODUCT_FROM_CART: "remove_product_from_cart",
  REMOVEALL_PRODUCT_FROM_CART: "removeall_product_from_cart",
  TOGGLE_FAV_IN_WISHLIST: "toggle_fav_in_wishlist",
};

const initialState = {
  cartItems: getLocalStorage("userCart", []),
  wishList: getLocalStorage("userWishList", []),
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT_TO_CART:
      swal({
        position: "top-end",
        icon: "success",
        title: "Album added to your cart",
        timer: 1500,
      });
      return addItemCart(state, action);
    case ACTIONS.REMOVE_PRODUCT_FROM_CART:
      return removeItemCart(state, action);
    case ACTIONS.REMOVEALL_PRODUCT_FROM_CART:
      return removeAllItemCart(state, action);
    case ACTIONS.TOGGLE_FAV_IN_WISHLIST:
      return toggleItemWishList(state, action);
    default:
      return state;
  }
};

export const GlobalContext = createContext({});

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    setLocalStorage("userCart", state.cartItems);
    setLocalStorage("userWishList", state.wishList);
  }, [state]);

  //actions
  const addProductToCart = (product) => {
    dispatch({ type: ACTIONS.ADD_PRODUCT_TO_CART, payload: product });
  };

  const removeProductFromCart = (product) => {
    dispatch({ type: ACTIONS.REMOVE_PRODUCT_FROM_CART, payload: product });
  };

  const removeAllProductFromCart = (product) => {
    dispatch({ type: ACTIONS.REMOVEALL_PRODUCT_FROM_CART, payload: product });
  };

  const toggleFavProductFromWishList = (product) => {
    dispatch({ type: ACTIONS.TOGGLE_FAV_IN_WISHLIST, payload: product });
  };

  return (
    <GlobalContext.Provider
      value={{
        cartItems: state.cartItems,
        wishList: state.wishList,
        addProductToCart,
        removeProductFromCart,
        removeAllProductFromCart,
        toggleFavProductFromWishList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
