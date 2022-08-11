import DisplayInfo from "components/DisplayInfo/DisplayInfo";
import OrderList from "components/OrderList/OrderList";
import { useOutletContext } from "react-router-dom";
import "./UserOrders.css";

const UserOrders = () => {
  const user = useOutletContext();

  const orderList = Boolean(user?.ordersList ?? null);

  const display =
    orderList > 0 ? (
      (user.ordersList).map((order) => (<OrderList order={order} />) )
    ) : (
      <DisplayInfo text="You don't have recents orders." />
    );
  return (
    <article className="userDetail__article">
      <h2 className="userDetail__title">
        <span>{user.firstname}, </span>Welcome to your personal space!{" "}
      </h2>
      <div className="userdetail__box">
        <h4 className="userDetail__subtitle">My Orders</h4>
        {display}
      </div>
    </article>
  );
};

export default UserOrders;
