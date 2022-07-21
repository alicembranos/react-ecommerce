import { API_URL_USERS } from "./settings";

const register = async ({ ...userForm }) => {
  const { email, password, firstname, lastname, genre, age } = userForm;
  return fetch(`${API_URL_USERS}signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password, firstname:firstname, lastname:lastname, genre:genre, age:age }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Email format is invalid");
      return res.json();
    })
    .then((data) => {
      const { accessToken, user } = data;
      return { jwt: accessToken, user };
    });
};

export default register;
