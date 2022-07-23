/**
 * It takes an array of objects, and returns the sum of the qty property of each object.
 */
const addSummaryQuantity = (cart) => {
  if (cart) {
    return cart.reduce((itemA, itemB) => {
      return itemA + itemB.qty;
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
  const exist = state.cartItems.find(
    (prodCart) => prodCart.id === action.payload.id
  );
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
  const exist = state.cartItems.find(
    (prodCart) => prodCart.id === action.payload.id
  );
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
  const exist = state.cartItems.find(
    (prodCart) => prodCart.id === action.payload.id
  );
  const newArray =
    exist &&
    state.cartItems.filter((prodCart) => prodCart.id !== action.payload.id);

  return updateObject(state, { cartItems: newArray });
};

const toggleItemWishList = (state, action) => {
  const exist = state.wishList.find(
    (itemWishList) => itemWishList.id === action.payload.id
  );
  const newArray = exist
    ? state.wishList.filter(
        (itemWishList) => itemWishList.id !== action.payload.id
      )
    : [...state.wishList, { ...action.payload }];

  return updateObject(state, { cartItems: newArray });
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
};
