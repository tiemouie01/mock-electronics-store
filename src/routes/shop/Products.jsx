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
    <section className="grid grid-cols-2 gap-4 p-4 pt-0 md:grid-cols-4 ">
      <div className="col-span-2 h-[45px] md:col-span-4"></div>
      <div className="lg:[w-98%] fixed flex w-[92%] items-center justify-between bg-white py-2 md:w-[97%]">
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
