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

export { addSummaryPrice, addSummaryQuantity, setPrice };
