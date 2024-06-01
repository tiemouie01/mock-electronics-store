import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, imageUrl, setSelectedProduct }) => {
  return (
    <article>
      <Link to="/shop/detail" onClick={() => setSelectedProduct(id)}>
        <img src={imageUrl} alt={`${title} photo`} className="w-[185px]"/>
        <h3>{title}</h3>
        <p>{price}</p>
      </Link>
    </article>
  );
};

export default ProductCard;
