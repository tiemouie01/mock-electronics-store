import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, imageUrl, setSelectedProduct }) => {
  return (
    <article className="flex items-center p-4 border rounded-md">
      <Link
        to="/shop/detail"
        onClick={() => setSelectedProduct(id)}
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
