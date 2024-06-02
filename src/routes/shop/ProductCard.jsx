import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, imageUrl, setSelectedProduct }) => {
  return (
    <article className="flex items-center rounded-md border-2 p-4 transition-all lg:hover:border-blue-600">
      <Link
        to="/shop/detail"
        onClick={() => {
          setSelectedProduct(id);
          window.scrollTo(0,0);
        }}
        className="flex flex-col items-center gap-2"
      >
        <img src={imageUrl} alt={`${title} photo`} className="max-w-[100px]" />
        <h3 className="font-semibold">{title}</h3>
        <p>${price}</p>
      </Link>
    </article>
  );
};

export default ProductCard;
