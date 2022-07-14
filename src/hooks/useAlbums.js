import { useEffect, useState } from "react";
import getAlbums from "services/getAlbums";

const useAlbums = ({ keyword }) => {
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAlbums().then((albums) => {
      setAlbums(albums);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const getSearchAlbums = (keyword) =>
      albums.filter(
        (album) =>
          album.title
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(keyword.toLowerCase().replace(/\s/g, "")) ||
          album.artist
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(keyword.toLowerCase().replace(/\s/g, ""))
      );
    const searchedAlbums = getSearchAlbums(keyword);
    searchedAlbums.length > 0
      ? setSearch(searchedAlbums)
      : setSearch({ noMatch: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  return { loading, albums, search };
};

export default useAlbums;
