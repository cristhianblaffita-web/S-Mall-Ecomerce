import { Link } from "react-router-dom";
import "./NavBar.css";
import { useCart } from "@/contexts/cart/useCart";
import brandLogo from "@/assets/logos/brand-logo.png";
import menuIcon from "@/assets/icons/navigation/menu.png";
import searchIcon from "@/assets/icons/navigation/search.png";
import cartIcon from "@/assets/icons/ui/shopping-cart.png";

const NavBar = ({ toggleMenu, toggleSearchSection }) => {
  const { cartAnimation, cartItemsQtty } = useCart();

  return (
    <nav className="navbar fixed w-full top-0 left-0 p-16 shadow-sm">
      <div className="options-nav">
        <button className="h-24px bdr-0 cursor-pointer bg-surface" onClick={toggleMenu}>
          <img className="h-24px" src={menuIcon} />
        </button>
      </div>

      <div className="logo-nav">
        <Link to="/products" className="h-24px bdr-0 flex justify-start">
          <img className="h-24px" src={brandLogo} />
        </Link>
      </div>

      <div className="search-nav bg-surface">
        <button className="h-24px bdr-0 cursor-pointer" onClick={toggleSearchSection}>
          <img className="h-24px bg-surface" src={searchIcon} />
        </button>
      </div>

      <div className="cart-nav relative">
        <Link to="/cart" className="h-24px bdr-0">
          <img
            className={`${cartAnimation} h-24px`}
            src={cartIcon}
            alt="Cart"
          />

          {cartItemsQtty > 0 ? (
            <span
              className={`${cartAnimation} cart-items-qtty absolute rounded-circle flex items-center
      justify-center bg-accent text-light text-sm`}
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
