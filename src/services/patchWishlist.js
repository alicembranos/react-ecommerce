import { API_URL_USERS } from "./settings";

const patchWishList = async (arrayWishList, user) => {
  const wishlitUser = {
    user,
    wishlist: [...arrayWishList],
  };
  console.log(wishlitUser);
  try {
    const response = await fetch(`${API_URL_USERS}update`, {
      method: "PATCH",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(wishlitUser),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export default patchWishList;
