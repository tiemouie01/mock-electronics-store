import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Header = ({ cartItems }) => {
  return (
    <header className="flex justify-between items-center p-4 border">
      <h1 className="text-3xl font-bold">e-msika</h1>
      <nav className="mr-12">
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li className="flex items-center gap-1"> 
            <FaCartShopping />
            <span data-testId="cart-icon">{cartItems}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
