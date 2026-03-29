import "./Menu.css"
import closeIcon from "@/assets/icons/ui/close.png"
import { useCategories } from "@/hooks/useCategories"
import { capitalize } from "@/utils/format"
import { Link } from "react-router-dom"

const Menu = ({ toggleMenu, isOpen, products }) => {

  const categories = useCategories(products)
  
  return (
    <aside className={`menu-navbar ${isOpen ? "open" : ""} flex-col p-16 font-base`}>
      
      <div className="close-btn-container">
        <button 
          className="close-btn absolute w-18px bdr-0"
          onClick={toggleMenu}
        >
          <img className="w-18px" src={closeIcon} alt="Close menu" />
        </button>
      </div>

      <div className="menu-section">
        <h2>Categories</h2>
        <hr />
        <ul className="menu-list">
          {categories && categories.map((category, index) => (
            <li className="menu-item" key={category}>
              <Link 
                className="decoration-none text-gray"
                to={`/products?category=${category}`}
                onClick={toggleMenu}
              >{capitalize(category)}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="menu-section">
        <h2>Options</h2>
        <hr/>
        <ul className="menu-list">
          <li className="menu-item">My orders</li>
          <li className="menu-item">My Account</li>
          <li className="menu-item">Login</li>
        </ul>
      </div>

    </aside>
  )
}

export default Menu