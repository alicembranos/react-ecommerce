import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsGallery.css";

const ProductsGallery = () => {
  const serverUri = "http://localhost:3000/albums";
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

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

  return (
    <div className="galleryProducts__container">
      {products.map((product, key) => (
        <ProductCard
          album={product.data.name}
          artist={product.data.artists.items[0].profile.name}
          year={product.data.date.year}
          price={product.data.price}
          image={product.data.coverArt.sources[0].url}
          key={product.data.id}
        />
      ))}
    </div>
  );
};

export default ProductsGallery;
