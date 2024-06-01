import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Products = ({ products, setSelectedProduct }) => {
  const cards = products.map((product) => (
    <ProductCard
      id={product.id}
      title={product.title}
      price={product.price}
      imageUrl={product.image}
      setSelectedProduct={setSelectedProduct}
    />
  ));

  return (
    <section>
      <h2>Products</h2>
      <button>
        <Link to="/shop/cart">View Cart</Link>
      </button>
      {cards}
    </section>
  );
};

export default Products;
