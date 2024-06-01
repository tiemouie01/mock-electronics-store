import { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(0);
  const [updateCartItems, selectedProduct, data] = useOutletContext();
  const selected = data.find((product) => product.id === selectedProduct);

  const addToCart = () => {
    const id = selected.id;
    const title = selected.title;
    const price = selected.price;
    updateCartItems({
      id,
      title,
      price,
      quantity,
    });
  };

  return (
    <>
      {selected && (
        <section>
          <img src={selected.image} alt={`${selected.title} photo`} />
          <div>
            <h2>Name: {selected.title}</h2>
            <Link to="/shop">
              <FaWindowClose />
            </Link>
          </div>
          <p>Description: {selected.description}</p>
          <p>Price: ${selected.price}</p>
          <p>Rating: {selected.rating.rate}/5</p>
          <form>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="text"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setQuantity(quantity + 1);
                }}
              >
                <FaChevronUp />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (quantity > 0) setQuantity(quantity - 1);
                }}
              >
                <FaChevronDown />
              </button>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart();
              }}
            >
              Add to Cart
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
