import ProductCard from "./ProductCard";
import { useRef } from "react";
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
    <section className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
      <div className="col-span-2 flex items-center justify-between bg-white py-2 lg:col-span-4">
        <h2 className="text-3xl font-semibold">Products</h2>
        <button className="rounded-lg border border-blue-600 bg-blue-500 p-2">
          <Link to="/shop/cart" className="font-semibold text-white">
            View Cart
          </Link>
        </button>
      </div>
      {cards}
    </section>
  );
};

export default Products;
