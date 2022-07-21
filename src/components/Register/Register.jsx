import useUser from "hooks/useUser";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Spinner } from "@nextui-org/react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import imgLogin from "assets/img/gallery/login.jpg";

const Register = () => {
  const [userForm, setUserForm] = useState({  email:"", password:"", firstname:"", lastname:"", genre:"", age:0, });
  const [, setLocation] = useLocation();
  const { login, isLogged, isLogginLoading, hasLoginError } = useUser();

  useEffect(() => {
    if (isLogged) setLocation("/cart");
  }, [isLogged, setLocation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ userForm });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserForm({ ...userForm, [name]: value });
  };

  return (
    <section className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        <div
          className="form-wrapper"
          style={{ backgroundImage: `url(${imgLogin})` }}
        >
          {isLogginLoading && (
            <div className="form-loading">
              <Spinner />
            </div>
          )}
          {hasLoginError && (
            <p className="form-error">
              <ErrorOutlineIcon /> Wrong credentials
            </p>
          )}
          <div className="form-content">
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
              <a href="/" className="form-text">
                Forgot password?
              </a>
            </div>
            <button className="btn" type="submit">
              Login
            </button>
            <p className="form-text">
              Don't have account?{" "}
              <a href="./">
                <span> Sign Up</span>
              </a>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Register;
