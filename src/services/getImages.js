import { API_URL_IMAGES } from "./settings";

const getImages = async () => {
    try {
        const res = await fetch(API_URL_IMAGES);
        const apiResponse = await res.json();
        return apiResponse;
    } catch (error) {
        return console.log(error);
    }
}

export default getImages;