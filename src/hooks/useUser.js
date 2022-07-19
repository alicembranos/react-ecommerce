import { useCallback, useContext, useState } from "react";
import loginService from "services/login";
import UserContext from "context/UserContext";

const useUser = () => {
  const { jwt, setJwt, setUser } = useContext(UserContext);
  const [state, setState] = useState({ loading: false, error: false });

  const login = useCallback(
    ({ userForm }) => {
      setState({ loading: true, error: false });
      loginService(userForm)
        .then((jwt, user) => {
          setState({ loading: false, error: false });
          setJwt(jwt);
          setUser(user);
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
  }, [setJwt]);

  return {
    isLogged: Boolean(jwt),
    isLogginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
  };
};

export default useUser;
