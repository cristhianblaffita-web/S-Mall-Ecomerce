import "./NavBar.css"

const NavBar = () => {
  
  return (
  <nav
    className="navbar fixed w-full top-0 left-0 p-16 shadow-sm"
  >
    <button
      className="options-nav h-24px bdr-0"
    ></button>
    <div
      className="logo-nav h-24px bdr-0 flex flex-start"
    ></div>
    <button
      className="search-nav h-24px bdr-0"
    ></button>
    <button
      className="cart-nav h-24px bdr-0"
    ></button>
  </nav>
    
  )
}

export default NavBar