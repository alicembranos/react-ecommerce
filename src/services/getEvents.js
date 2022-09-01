import { API_URL_CONCERTS } from "./settings";

const getEvents = async () => {
  try {
    const response = await fetch(API_URL_CONCERTS, {
      headers: {
        mode: "cors",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getEvents;
