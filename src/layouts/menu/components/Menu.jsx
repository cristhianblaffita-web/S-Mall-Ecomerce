import "./Menu.css"
import closeIcon from "@/assets/icons/ui/close.png"

const Menu = ({ toggleMenu, isOpen }) => {
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
          <li className="menu-item">Most sales</li>
          <li className="menu-item">Clothes</li>
          <li className="menu-item">Electronics</li>
          <li className="menu-item">Food</li>
          <li className="menu-item">Miscellaneous</li>
          <li className="menu-item">Others</li>
        </ul>
      </div>

      <div className="menu-section">
        <hr />
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