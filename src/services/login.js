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
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export default login;
