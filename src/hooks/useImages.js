import { useEffect, useState } from "react";
import getImages from "services/getImages";

const useImages = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getImages().then((data) => {
      setImages(data);
      setIsLoading(false);
    });
  }, []);

  console.log(images);
  return { images, isLoading };
};

export default useImages;
