import "./NavBar.css"
import brandLogo from "@/assets/logos/brand-logo.png"
import menuIcon from "@/assets/icons/navigation/menu.png"
import searchIcon from "@/assets/icons/navigation/search.png"
import cartIcon from "@/assets/icons/ui/shopping-cart.png"

const NavBar = () => {
  
  return (
  <nav
    className="navbar fixed w-full top-0 left-0 p-16 shadow-sm"
  >
    <div
      className="options-nav h-24px bdr-0"
    >
      <img className="h-24px" src={menuIcon} />
    </div>
    
    <div
      className="logo-nav h-24px bdr-0 flex justify-start"
    >
      <img className="h-24px" src={brandLogo} />
    </div>
    
    <div
      className="search-nav h-24px bdr-0"
    >
      <img className="h-24px" src={searchIcon} />
    </div>
    
    <div
      className="cart-nav h-24px bdr-0"
    >
      <img className="h-24px" src={cartIcon} />
    </div>
  </nav>
    
  )
}

export default NavBar