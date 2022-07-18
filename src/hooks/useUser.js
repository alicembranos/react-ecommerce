import { useCallback, useContext } from "react";
import UserContext from "context/UserContext";

const useUser = () => {
  const { jwt, setJwt } = useContext(UserContext);

  const login = useCallback(() => {
    setJwt("test");
  }, [setJwt]);

  const logout = useCallback(() => {
    setJwt(null);
  }, [setJwt]);

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
  };
};

export default useUser;
