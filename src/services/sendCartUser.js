import { API_URL_USERS } from "./settings";

const sendCartUser = async (ordersList, user, userOrdersList) => {
  const ordersListUser = {
    user,
    ordersList: [...userOrdersList, { ...ordersList }],
  };
  try {
    const response = await fetch(`${API_URL_USERS}updateOrderList`, {
      method: "PATCH",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(ordersListUser),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export default sendCartUser;
