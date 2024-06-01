import { useOutletContext } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";

const Cart = () => {
  const context = useOutletContext();
  const cartItems = context[3];
  const setCartItems = context[4];

  const clearCart = () => setCartItems([]);

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const products = cartItems.map((product, index) => {
    return (
      <tr>
        <td>{product.title}</td>
        <td>${product.price}</td>
        <td>{product.quantity}</td>
        <td>
          <button onClick={() => removeFromCart(index)}>
            <FaTrash />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <section>
      <h1>Products in Cart</h1>
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </thead>
        {products}
      </table>
      <button onClick={() => clearCart()}>Checkout</button>
    </section>
  );
};

export default Cart;
