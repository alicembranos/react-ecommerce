import "./OrderList.css";

const OrderList = ({ order }) => {
  return (
    <div key={ order.orderNumber} className="order__container">
      <div className="order__id">
        <p className="order__number">
          Order: <span>#{order.orderNumber}</span>
        </p>
        <p className="order__date">Place Date: {order.date}</p>
      </div>
      <hr />
      {order.cartItems.map((ord) => (
        <div className="order__detail" key={ord.id}>
          <div className="order__image">
            <img src={ord.img} alt={ord.title} />
          </div>
          <div className="order__products">
            <div className="order__text">
              <p className="order__title">{ord.title}</p>
              <p className="order__subtitle">{ord.artist}</p>
            </div>
            <div className="order__numbers">
              <p className="order__qty">Qty: {ord.qty}</p>
              <p className="order__price">Price/item {ord.price}€</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
