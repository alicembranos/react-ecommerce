import { API_URL_USERS } from "./settings";

const login = async ({ ...userForm }) => {
  const { email, password } = userForm;
  try {
    const res = await fetch(`${API_URL_USERS}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    if (!res.ok) throw new Error("Response is not ok");
    const apiResponse = await res.json();
    const { accessToken, user } = apiResponse;
    return { jwt: accessToken, user };
  } catch (error) {
    return console.error(error);
  }
};

export default login;
