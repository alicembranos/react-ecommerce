import useAlbums from "hooks/useAlbums";
import { createContext, useState } from "react";

export const AlbumsContext = createContext({});

const keyword = "";

export function AlbumsContextProvider({ children }) {
  // const [albums, setAlbums] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { loading, albums, search, match  } = useAlbums({keyword});
  return (
    <AlbumsContext.Provider value={{ loading, albums, search, match, keyword, setKeyword }}>
      {children}
    </AlbumsContext.Provider>
  );
}

export default AlbumsContext;
