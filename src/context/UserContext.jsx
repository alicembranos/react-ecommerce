import { createContext, useState } from "react";

const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState(null);

  return (
    <UserContext.Provider value={{ jwt, setJwt }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
