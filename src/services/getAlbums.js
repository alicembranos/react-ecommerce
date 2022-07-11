import { API_URL } from "./settings";

const apiResponseToAlbums = (apiResponse) => {
  const { items } = apiResponse;
  if (Array.isArray(items)) {
    const albums = items.map((album) => {
      const { id, name: title, price } = album.data;
      const { name: artist } = album.data.artists.items[0].profile;
      const { url: img } = album.data.coverArt.sources[0];
      const { year } = album.data.date;
      return { id, title, price, artist, img, year };
    });
    return albums;
  }
  return [];
};

const getAlbums = async () => {
  try {
        const res = await fetch(API_URL);
        const apiResponse = await res.json();
        return apiResponseToAlbums(apiResponse);
    } catch (error) {
        return console.log(error);
    }
};

export default getAlbums;
