import { API_URL_USERS } from "./settings";

const patchWishList = async (arrayWishList, userId) => {
  const wishlitObject = {
    whislist: [...arrayWishList ],
  };

  try {
    const response = await fetch(`${API_URL_USERS}${userId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(wishlitObject),
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
