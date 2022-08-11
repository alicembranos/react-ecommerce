import getWishList from "./getWishList";
import patchWishList from "./patchWishlist";

/**
 * It takes an array of objects, and returns the sum of the qty property of each object.
 */
const addSummaryQuantity = (cart) => {
  if (cart) {
    return cart.reduce((itemA, itemB) => {
      return itemA + (itemB?.qty ?? 1);
    }, 0);
  }
  return 0;
};

/**
 * It takes an array of objects, and returns the sum of the product of the qty and price properties of
 * each object.
 */
const addSummaryPrice = (cart) => {
  if (cart) {
    return cart.reduce((itemA, itemB) => {
      return itemA + itemB.price * itemB.qty;
    }, 0);
  }
  return 0;
};

/**
 * This function takes two arguments, qty and price, and returns the product of the two.
 * @returns the value of the qty * price.
 */
const setPrice = (qty, price) => {
  return qty * price;
};

/**
 * It returns true if the array contains an object with the same id as the object passed in
 * @param array - the array you want to search
 * @param obj - {id: 1, name: "John"}
 * @returns Boolean(exist)
 */
const findInArrayById = (array, obj) => {
  const exist =
    typeof array !== "undefined"
      ? array.find((element) => element.id === obj.id)
      : null;
  return Boolean(exist);
};

/**
 * It returns the first element in the array that matches the condition.
 * @param array - the array you want to search
 * @param item - the item you want to find
 * @returns The first element in the array that matches the condition.
 */
const findItem = (array, item) => {
  return array.find((el) => el.id === item.id);
};

/**
 * It takes an object and an object of new values, and returns a new object with the new values merged
 * in.
 * @param oldObject - The object to be updated.
 * @param newValues - The new values to be merged into the oldObject.
 */
const updateObject = (oldObject, newValues) => {
  return Object.assign({}, oldObject, newValues);
};

/**
 * If the quantity of the item is 1, then remove the item from the cart, otherwise, reduce the quantity
 * by 1.
 * @param state - the current state of the reducer
 * @param action - {type: "REMOVE_ITEM_CART", payload: {id: "1", qty: 1}}
 * @returns The new state object with the updated cartItems array.
 */
const removeItemCart = (state, action) => {
  const exist = findItem(state.cartItems, action.payload);

  const newArray =
    exist.qty === 1
      ? state.cartItems.filter((prodCart) => prodCart.id !== action.payload.id)
      : state.cartItems.map((prodCart) =>
          prodCart.id === action.payload.id
            ? { ...exist, qty: exist.qty - 1 }
            : prodCart
        );

  return updateObject(state, { cartItems: newArray });
};

/**
 * If the product exists in the cart, then increase the quantity by 1, otherwise add the product to the
 * cart.
 * @param state - the current state of the reducer
 * @param action - {type: "ADD_ITEM_CART", payload: {id: 1, name: "test", price: 10}}
 * @returns The newArray is being returned.
 */
const addItemCart = (state, action) => {
  const exist = findItem(state.cartItems, action.payload);
  const newArray = exist
    ? state.cartItems.map((prodCart) =>
        prodCart.id === action.payload.id
          ? { ...exist, qty: exist.qty + 1 }
          : prodCart
      )
    : [...state.cartItems, { ...action.payload, qty: 1 }];

  return updateObject(state, { cartItems: newArray });
};

/**
 * It removes all items from the cartItems array that have the same id as the payload.id.
 * @param state - the current state of the reducer
 * @param action - {type: "REMOVE_ALL_ITEM_CART", payload: {id: "1"}}
 * @returns The newArray is being returned.
 */
const removeAllItemCart = (state, action) => {
  const exist = findItem(state.cartItems, action.payload);
  const newArray =
    exist &&
    state.cartItems.filter((prodCart) => prodCart.id !== action.payload.id);

  return updateObject(state, { cartItems: newArray });
};

/**
 * If the item exists in the wishlist, remove it, otherwise add it.
 * @param state - the current state of the reducer
 * @param action - {type: "TOGGLE_ITEM_WISHLIST", payload: {id: 1, name: "item1"}}
 * @returns The newArray is being returned.
 */
const toggleItemWishList = (state, action) => {
  const exist = findItem(state.wishList, action.payload);
  const newArray = exist
    ? state.wishList.filter(
        (itemWishList) => itemWishList.id !== action.payload.id
      )
    : [...state.wishList, { ...action.payload }];

  return updateObject(state, { wishList: newArray });
};

/**
 * If the user is logged in, get the wish list from the database and update the state with the new wish
 * list.
 * @param state - the current state of the reducer
 * @param action - {
 * @returns The new state object with the new wishList.
 */
const getWishListAtLogin = (state, action) => {
  console.log(state, action);
  return updateObject(state, { wishList: action.payload });
};

/**
 * If the user logs out, remove the wishList from the state.
 * @param state - the current state of the reducer
 * @returns The state is being updated with the wishList property being set to an empty array.
 */
const removeWishListAtLogout = (state) => {
  return updateObject(state, { wishList: [] });
};

/**
 * It returns the value of the key in localStorage.
 * @param key - The key to store the value under.
 * @returns The value of the key in localStorage.
 */
function getLocalStorage(key, initialValue) {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : initialValue;
}

/**
 * It sets the local storage item with the key that is passed in.
 * @param key - The key to store the value under.
 */
function setLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}


/**
 * This function takes a wishlist and a userId, and then sends the wishlist to the server.
 * @param wishlist - an array of objects
 * @param userId - the user's id
 */
const sendWishList = async (wishlist, userId) => {
  await patchWishList(wishlist, userId);
};

export {
  addSummaryPrice,
  addSummaryQuantity,
  setPrice,
  findInArrayById,
  removeItemCart,
  addItemCart,
  removeAllItemCart,
  toggleItemWishList,
  getLocalStorage,
  setLocalStorage,
  getWishListAtLogin,
  removeWishListAtLogout,
  sendWishList
};
