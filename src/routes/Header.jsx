import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Header = ({ cartItems }) => {
  return (
    <header className="flex items-center justify-between border p-4">
      <h1 className="text-3xl font-bold">e-msika</h1>
      <nav className="lg:mr-12">
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li className="flex items-center gap-1">
            <FaCartShopping />
            <span data-testid="cart-icon">{cartItems}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
