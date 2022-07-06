import { useEffect, useState } from "react";
import ProductsGallery from "../ProductsGallery/ProductsGallery";

const FetchProducts = (props) => {
  const { onAdd } = props;
  const serverUri = "http://localhost:3000/albums";
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const request = await fetch(serverUri);
      if (request.ok) {
        const response = await request.json(); 
        setProducts(response.items);
      } else {
        console.log("Network request ok but http response no ok");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>{products && <ProductsGallery products={products} onAdd={onAdd} />}</>
  );
};

export default FetchProducts;
