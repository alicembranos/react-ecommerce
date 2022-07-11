import ProductCard from "components/ProductCard/ProductCard";
import "./ProductsGallery.css";

const ProductsGallery = (props) => {
  const { products, onAdd } = props;

  return (
    <section className="galleryProducts__container">
      {products.map((product) => (
        <ProductCard
          key={product.data.id}
          product={product}
          onAdd={onAdd}
        />
      ))}
    </section>
  );
};

export default ProductsGallery;
