import './ShoppingCart.css';

const ShoppingCart = (props) => {
  const { cartItems } = props; 
  return (
    <div className="shoppingCart__container">
      <h2 className='shoppingCart__h2'>Shopping Cart</h2>
      <div>
        {cartItems.length === 0 && <p className='shoppingCart__p'>Cart is empty</p>}
      </div>
    </div>
  )
}

export default ShoppingCart