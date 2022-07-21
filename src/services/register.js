import { API_URL_USERS } from "./settings";

const register = async ({ ...userForm }) => {
  const { email, password, firstname, lastname, genre, age } = userForm;
  return fetch(`${API_URL_USERS}register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      genre: genre,
      age: age,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export default register;
