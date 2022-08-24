import useLocalStorage from "hooks/useLocalStorage";
import { createContext } from "react";

const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const { value: jwt, setValue: setJwt } = useLocalStorage("jwt", null);
  const { value: user, setValue: setUser } = useLocalStorage("user", null);

  return (
    <UserContext.Provider value={{ jwt, user, setJwt, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
