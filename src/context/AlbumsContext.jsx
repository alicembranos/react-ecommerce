import React, { useState } from "react";

export  const AlbumsContext = React.createContext({});

export function AlbumsContextProvider({ children }) {
  const [albums, setAlbums] = useState([]);
  return (
    <AlbumsContext.Provider value={{ albums, setAlbums }}>
      {children}
    </AlbumsContext.Provider>
  );
}

export default AlbumsContext;