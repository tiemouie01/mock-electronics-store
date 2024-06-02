import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";

const Cart = () => {
  const context = useOutletContext();
  const cartItems = context[3];
  const setCartItems = context[4];
  const headerRef = context[5];

  const totalPrice = cartItems.reduce((prev, curr) => {
    const cost = curr.price * curr.quantity;
    return prev + cost;
  }, 0);

  const clearCart = () => setCartItems([]);

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const products = cartItems.map((product, index) => {
    return (
      <tr>
        <td className="border p-2 text-center">{product.title}</td>
        <td className="border p-2 text-center">${product.price}</td>
        <td className="border p-2 text-center">{product.quantity}</td>
        <td>
          <button onClick={() => removeFromCart(index)} className="p-2">
            <FaTrash color="blue" />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <section className="row-start-1 space-y-4 p-4 lg:col-start-2 lg:border">
      <div className="flex items-center justify-between lg:mt-14">
        <h2 className="text-xl font-bold">Products in Cart</h2>
        <Link
          to="/shop"
          onClick={() => {
            headerRef.current.classList.toggle("hidden");
          }}
        >
          <FaWindowClose size={30} color="blue" />
        </Link>
      </div>
      {cartItems.length < 1 ? (
        <p>No Items in the cart</p>
      ) : (
        <table className="rounded-lg bg-blue-200">
          <thead>
            <th className="w-1/3 p-2">Name</th>
            <th className="w-1/3 p-2">Price</th>
            <th className="w-1/3 p-2">Quantity</th>
          </thead>
          {products}
        </table>
      )}
      <p className="text-center text-lg">
        <strong>Total cost:</strong> ${totalPrice}
      </p>
      <button
        onClick={() => clearCart()}
        className="m-auto block rounded-lg border border-blue-600 bg-blue-500 p-2 text-white"
      >
        Checkout
      </button>
    </section>
  );
};

export default Cart;
