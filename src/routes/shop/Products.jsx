import ProductCard from "./ProductCard";

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
      {cards}
    </section>
  );
};

export default Products;
