import { useCallback, useContext } from "react";
import UserContext from "context/UserContext";

const useUser = () => {
  const { jwt, setJWT } = useContext(UserContext);

  const login = useCallback(() => {
    setJWT("test");
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    login,
  };
};

export default useUser;
