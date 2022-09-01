import { useCallback, useContext, useState } from "react";
import loginService from "services/login";
import registerService from "services/register";
import UserContext from "context/UserContext";
import GlobalContext from "context/GlobalContext";

const useUser = () => {
  const { jwt, setJwt, setUser } = useContext(UserContext);
  const { removeWishListUserAtLogout, getWishListAtLoginByUser } =
    useContext(GlobalContext);
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
            getWishListAtLoginByUser(user?.wishlist ?? []);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const logout = useCallback(() => {
    setJwt(null);
    setUser(null);
    removeWishListUserAtLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const register = useCallback(({ userForm }) => {
    setState({ loading: true, error: false });
    registerService(userForm)
      .then((data) => {
        console.log(data);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
