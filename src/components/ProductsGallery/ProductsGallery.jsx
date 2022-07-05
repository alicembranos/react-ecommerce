import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsGallery.css";

const ProductsGallery = (props) => {
  const { products, onAdd } = props;

  return (
    <div className="galleryProducts__container">
      {products.map((product) => (
        <ProductCard
          album={product.data.name}
          artist={product.data.artists.items[0].profile.name}
          year={product.data.date.year}
          price={product.data.price}
          image={product.data.coverArt.sources[0].url}
          key={product.data.id}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default ProductsGallery;
