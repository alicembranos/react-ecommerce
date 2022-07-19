import { API_URL_USERS } from "./settings";

const login = async ({ ...userForm }) => {
  const { email, password } = userForm;
  return fetch(`${API_URL_USERS}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Bad credentials");
      return res.json();
    })
    .then((data) => {
      const { accessToken, user } = data;
      return { jwt: accessToken, user };
    });
};

export default login;
