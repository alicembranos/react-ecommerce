import { createContext, useState } from "react";

const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ jwt, user, setJwt, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
