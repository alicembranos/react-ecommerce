import { useReducer, createContext, useEffect, useContext } from "react";
import {
  addItemCart,
  getLocalStorage,
  getWishListAtLogin,
  removeAllItemCart,
  removeCartItems,
  removeItemCart,
  removeWishListAtLogout,
  sendWishList,
  setLocalStorage,
  toggleItemWishList,
} from "services/functions";
import swal from "sweetalert";
import UserContext from "./UserContext";

const ACTIONS = {
  ADD_PRODUCT_TO_CART: "add_product_to_cart",
  REMOVE_PRODUCT_FROM_CART: "remove_product_from_cart",
  REMOVEALL_PRODUCT_FROM_CART: "removeall_product_from_cart",
  TOGGLE_FAV_IN_WISHLIST: "toggle_fav_in_wishlist",
  LOGIN_WISHLIST: "login_wishList",
  LOGOUT_WISHLIST: "logout_wishList",
  REMOVE_CARTITEMS: "remove_cartItems",
};

const initialState = {
  cartItems: getLocalStorage("userCart", []),
  wishList: [],
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
    case ACTIONS.LOGIN_WISHLIST:
      return getWishListAtLogin(state, action);
    case ACTIONS.LOGOUT_WISHLIST:
      return removeWishListAtLogout(state);
    case ACTIONS.REMOVE_CARTITEMS:
      return removeCartItems(state);
    default:
      return state;
  }
};

export const GlobalContext = createContext({});

export function GlobalContextProvider({ children }) {
  const { user } = useContext(UserContext);
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    setLocalStorage("userCart", state.cartItems);
    setLocalStorage("userWishList", state.wishList);
    if (user && state.wishList.length > 0) {
      sendWishList(state.wishList, user);
    }
  }, [state, user]);

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

  const getWishListAtLoginByUser = (wishListUser) => {
    dispatch({ type: ACTIONS.LOGIN_WISHLIST, payload: wishListUser });
  };

  const removeWishListUserAtLogout = () => {
    dispatch({ type: ACTIONS.LOGOUT_WISHLIST });
  };

  const removeCartItemsFromUser = () => {
    dispatch({ type: ACTIONS.REMOVE_CARTITEMS });
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
        getWishListAtLoginByUser,
        removeWishListUserAtLogout,
        removeCartItemsFromUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
