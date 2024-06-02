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
        <section className="row-start-1 space-y-4 p-4 lg:col-start-4 lg:max-w-md lg:border">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{selected.title}</h2>
            <Link to="/shop">
              <FaWindowClose size={30} color="blue" />
            </Link>
          </div>
          <img
            src={selected.image}
            alt={`${selected.title} photo`}
            className="m-auto w-3/4 md:w-1/2"
          />
          <p>
            <strong>Description:</strong> {selected.description}
          </p>
          <div className="flex justify-around">
            <p>
              <strong>Price:</strong> ${selected.price}
            </p>
            <p>
              <strong>Rating:</strong> {selected.rating.rate}/5
            </p>
          </div>
          <form className="flex items-center justify-center">
            <label className="font-bold" htmlFor="quantity">
              Quantity:
            </label>
            <input
              type="text"
              onChange={(e) => setQuantity(Number(e.target.value))}
              value={quantity}
              className="w-[4ch] p-2 text-lg"
            />
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setQuantity(quantity + 1);
                }}
                className="block border p-1"
              >
                <FaChevronUp />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (quantity > 0) setQuantity(quantity - 1);
                }}
                className="border p-1"
              >
                <FaChevronDown />
              </button>
            </div>
          </form>
          <button
            onClick={() => {
              if (quantity > 0) addToCart();
            }}
            className="m-auto block rounded-lg border border-blue-600 bg-blue-500 p-2 font-bold text-white"
          >
            Add to Cart
          </button>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
