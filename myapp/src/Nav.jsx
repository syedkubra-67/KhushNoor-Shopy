import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaUserCircle,
} from "react-icons/fa";

function Nav() {
  return (
    <nav className="navbar">

      <div className="logo">
        KHUSH NOOR
      </div>

      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search for products..."
        />
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/categories">
            Categories
          </Link>
        </li>

        <li>
          <Link to="/orders">
            Orders
          </Link>
        </li>

        <li>
          <Link to="/wishlist">
            <FaHeart />
            Wishlist
          </Link>
        </li>

        <li>
          <Link to="/profile">
            <FaUserCircle />
            Profile
          </Link>
        </li>

        <li>
          <FaShoppingCart className="cart-icon" />
        </li>

      </ul>

    </nav>
  );
}

export default Nav;