import { useCallback, useContext, useState } from "react";
import loginService from "services/login";
import registerService from "services/register";
import UserContext from "context/UserContext";

const useUser = () => {
  const { jwt, setJwt, setUser } = useContext(UserContext);
  const [state, setState] = useState({ loading: false, error: false });
  const [message, setMessage] = useState("Bad credentials");

  const login = useCallback(
    ({ userForm }) => {
      setState({ loading: true, error: false });
      loginService(userForm)
        .then((data) => {
          if (typeof data === "object") {
            const { accessToken, user } = data;
            setState({ loading: false, error: false });
            setJwt(accessToken);
            setUser(user);
            return;
          }
          setMessage(data);
          setState({ loading: false, error: true });
        })
        .catch((err) => {
          setState({ loading: false, error: true });
          console.error(err);
        });
    },
    [setJwt, setUser]
  );

  const logout = useCallback(() => {
    setJwt(null);
    setUser(null);
  }, [setJwt, setUser]);

  const register = useCallback(
    ({ userForm }) => {
      setState({ loading: true, error: false });
      registerService(userForm)
        .then((data) => {
          if (typeof data === "object") {
            const { accessToken, user } = data;
            setState({ loading: false, error: false });
            setJwt(accessToken);
            setUser(user);
            return;
          }
          setMessage(data);
          setState({ loading: false, error: true });
        })
        .catch((err) => {
          setState({ loading: false, error: true });
          console.error(err);
        });
    },
    [setJwt, setUser]
  );

  return {
    isLogged: Boolean(jwt),
    isLogginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
    register,
    message,
  };
};

export default useUser;
