import "./Menu.css"
import closeIcon from "@/assets/icons/ui/close.png"

const Menu = () => {
  
  return (
    <aside className="menu-navbar p-16 flex-col font-base">
      <button 
      className="close-btn absolute w-18px bdr-0"
      >
        <img className="w-18px" src={closeIcon} />
      </button>
      
      <div className="menu-categories-container w-full">
        <h2>Categories</h2>
        <hr/>
        <ul className="menu-categories">
          <li className="menu-item">Most sales</li>
          <li className="menu-item">Clothes</li>
          <li className="menu-item">Electronics</li>
          <li className="menu-item">Food</li>
          <li className="menu-item">Miscellaneous</li>
          <li className="menu-item">Others</li>
        </ul>
      </div>
      <hr/>
      <ul className="menu-others">
        <li className="menu-item">My orders</li>
        <li className="menu-item">My Account</li>
        <li className="menu-item">Login</li>
      </ul>
    </aside>
  )
}

export default Menu