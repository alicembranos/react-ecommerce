import useUser from "hooks/useUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@nextui-org/react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import imgLogin from "assets/img/gallery/login.jpg";
import "./Register.css";

const Register = () => {
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    genre: ""
  });

  const { register, isLogged, isLogginLoading, hasLoginError, message } =
    useUser();

  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged) navigate("/cart");
  }, [isLogged, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ userForm });
  };

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    setUserForm((prevUserForm) => {
      return { ...prevUserForm, [name]: type === "checkbox" ? checked : value };
    });
  };

  return (
    <section className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        <div
          className="form-wrapper"
          style={{ backgroundImage: `url(${imgLogin})` }}
        >
          <h6 className="formRegister-title">Hello, I'm new here</h6>
          {isLogginLoading && (
            <div className="form-loading">
              <Spinner />
            </div>
          )}
          {hasLoginError && (
            <p className="form-error">
              <ErrorOutlineIcon />
              {message}
            </p>
          )}
          <div className="form-content">
            <div className="form-group">
              <PersonOutlineIcon className="login-icons" />
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={userForm.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <PersonOutlineIcon className="login-icons" />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={userForm.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <EmailOutlinedIcon className="login-icons" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userForm.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <HttpsOutlinedIcon className="login-icons" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={userForm.password}
                onChange={handleChange}
              />
              <p className="form-gender">Select your gender:</p>
              <div className="formGroup-rb">
                <input
                  className="register__rb"
                  type="radio"
                  name="genre"
                  value="Woman"
                  id="woman"
                  checked={userForm.genre === "Woman"}
                  onChange={handleChange}
                />
                <label htmlFor="woman">Woman</label>
                <input
                  className="register__rb"
                  type="radio"
                  name="genre"
                  value="Man"
                  id="man"
                  checked = {userForm.genre === "Man"}
                  onChange={handleChange}
                />
                <label htmlFor="man">Man</label>
              </div>
            </div>
            <button className="btnRegister" type="submit">
              Sign Up
            </button>
            <p className="formRegister-text">
              By creating an account, you agree to the Terms and Conditions and
              Privacy Policy of Voizz.
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Register;
