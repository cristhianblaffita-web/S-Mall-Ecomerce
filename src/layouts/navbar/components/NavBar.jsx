import { Link } from "react-router-dom";
import "./NavBar.css";

import { useCart } from "@/contexts/cart/useCart";

import brandLogo from "@/assets/logos/brand-logo.png";

import { BiMenuAltLeft, BiSearch, BiCart } from "react-icons/bi";

const NavBar = ({ toggleMenu, toggleSearchSection }) => {
  const { cartAnimation, cartItemsQtty } = useCart();

  return (
    <nav className="navbar fixed top-0 left-0 w-full p-16 shadow-lg">
      <div className="options-nav">
        <button
          type="button"
          aria-label="Open navigation menu"
          className="nav-icon-button"
          onClick={toggleMenu}
        >
          <BiMenuAltLeft className="ui-icon" />
        </button>
      </div>

      <div className="logo-nav">
        <Link
          to="/products"
          className="nav-logo-link"
          aria-label="Go to products page"
        >
          <img
            src={brandLogo}
            alt="Brand logo"
            className="ui-icon h-24px"
          />
        </Link>
      </div>

      <div className="nav-actions">
        <div className="search-nav">
          <button
            type="button"
            aria-label="Open search"
            className="nav-icon-button"
            onClick={toggleSearchSection}
          >
            <BiSearch className="ui-icon" />
          </button>
        </div>

        <div className="cart-nav relative">
          <Link
            to="/cart"
            className="nav-icon-button"
            aria-label={`Shopping cart with ${cartItemsQtty} items`}
          >
            <BiCart className={`ui-icon ${cartAnimation}`} />

            {cartItemsQtty > 0 && (
              <span
                className={`${cartAnimation} cart-items-qtty absolute rounded-circle flex items-center justify-center bg-accent text-sm`}
              >
                {cartItemsQtty > 99 ? "99+" : cartItemsQtty}
              </span>
            )}
          </Link>
        </div>
        
      </div>
    </nav>
  );
};

export default NavBar;