import { API_URL_USERS } from "./settings";

const getWishList = async (userId) => {
  try {
    const response = await fetch(`${API_URL_USERS}${userId}`);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data?.whislist ?? [];
    }
  } catch (error) {
    console.log(error);
  }
};

export default getWishList;
