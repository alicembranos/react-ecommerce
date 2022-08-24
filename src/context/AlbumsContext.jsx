import useAlbums from "hooks/useAlbums";
import { createContext, useState } from "react";

export const AlbumsContext = createContext({});

const initKeyword = "";

export function AlbumsContextProvider({ children }) {
  const [keyword, setKeyword] = useState(initKeyword);
  const { loading, albums, search, match  } = useAlbums({keyword});
  return (
    <AlbumsContext.Provider value={{ loading, albums, search, match, keyword, setKeyword }}>
      {children}
    </AlbumsContext.Provider>
  );
}

export default AlbumsContext;
