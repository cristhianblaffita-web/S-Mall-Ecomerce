import { Link } from "react-router-dom";
import "./NavBar.css";
import { useCart } from "@/contexts/cart/useCart";
import brandLogo from "@/assets/logos/brand-logo.png";
import { BiMenuAltLeft } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";

const NavBar = ({ toggleMenu, toggleSearchSection }) => {
  const { cartAnimation, cartItemsQtty } = useCart();

  return (
    <nav className="navbar fixed w-full top-0 left-0 p-16 shadow-lg">
      <div className="options-nav">
        <button className="h-24px bdr-0 cursor-pointer bg-surface" onClick={toggleMenu}>
          <BiMenuAltLeft className="ui-icon"/>
        </button>
      </div>

      <div className="logo-nav">
        <Link to="/products" className="h-24px bdr-0 flex justify-start">
          <img className="ui-icon h-24px" src={brandLogo} />
        </Link>
      </div>

      <div className="search-nav bg-surface">
        <button className="h-24px bdr-0 cursor-pointer bg-surface" onClick={toggleSearchSection}>
          <BiSearch className="ui-icon"/>
        </button>
      </div>

      <div className="cart-nav relative">
        <Link to="/cart" className="h-24px bdr-0">
          <BiCart className={`ui-icon ${cartAnimation}`} alt="Cart"/>

          {cartItemsQtty > 0 ? (
            <span
              className={`${cartAnimation} cart-items-qtty absolute rounded-circle flex items-center
      justify-center bg-accent text-sm`}
            >
              {cartItemsQtty > 99 ? "99+" : cartItemsQtty}
            </span>
          ) : (
            false
          )}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
