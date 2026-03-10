import { Link } from "react-router-dom"
import "./NavBar.css"
import { useCart } from "@/contexts/cart/useCart"
import brandLogo from "@/assets/logos/brand-logo.png"
import menuIcon from "@/assets/icons/navigation/menu.png"
import searchIcon from "@/assets/icons/navigation/search.png"
import cartIcon from "@/assets/icons/ui/shopping-cart.png"

const NavBar = (
  {
    toggleMenu,
    toggleSearchSection,
  
  }) => {
  
  const { cartItems, isCartAnimating } = useCart()
  
  const cartItemsQtty = cartItems.length
  
  return (
  <nav
    className="navbar fixed w-full top-0 left-0 p-16 shadow-sm"
  >
    <button
      className="options-nav h-24px bdr-0"
      onClick={toggleMenu}
    >
      <img className="h-24px" src={menuIcon} />
    </button>
    
    <Link
      to="/"
      className="logo-nav h-24px bdr-0 flex justify-start"
    >
      <img className="h-24px" src={brandLogo} />
    </Link>
    
    <button
      className="search-nav h-24px bdr-0"
      onClick={toggleSearchSection}
    >
      <img className="h-24px" src={searchIcon} />
    </button>
    
    <Link
  to="/cart"
  className="relative cart-nav h-24px bdr-0"
>
  <img 
    className={`${isCartAnimating ? "cart-bump" : ""} h-24px`}
    src={cartIcon} 
    alt="Cart" />
  
  {cartItemsQtty > 0 ? <span
    className="cart-items-qtty absolute rounded-circle flex items-center justify-center bg-accent text-light text-sm"
  >{cartItemsQtty}</span> : false}
</Link>
  </nav>
    
  )
}

export default NavBar