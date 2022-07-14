import { useEffect, useState } from "react";
import getAlbums from "services/getAlbums";

const useAlbums = ({ keyword }) => {
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState([]);
  const [match, setMatch] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAlbums().then((albums) => {
      setAlbums(albums);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (keyword==="") {
      setSearch([]);
      setMatch(true);
      return;
    }
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
    if (searchedAlbums.length > 0) {
      setSearch(searchedAlbums);
      setMatch(true)
      return;
    }
    setSearch([]);
    setMatch(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  return { loading, albums, search, match};
};

export default useAlbums;
