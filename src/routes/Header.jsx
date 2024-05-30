import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Header = ({ cartItems }) => {
  return (
    <header>
      <h1>e-msika</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <FaCartShopping />
            <span data-testId="cart-icon">{cartItems}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
