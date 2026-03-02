import { Outlet } from "react-router-dom"
import NavBar from "@/layouts/navbar/components/NavBar"
import "./MainLayout.css"
import Menu from "@/layouts/menu/components/Menu"

import useToggleMenu from "@/layouts/menu/hooks/useToggleMenu" 

const MainLayout = () => {
  const {isOpen, toggleMenu } = useToggleMenu()
  
  return (
    <>
      <header>
        <NavBar 
          toggleMenu={toggleMenu}
        />
        <Menu
          toggleMenu={toggleMenu}
          isOpen={isOpen}
        />
      </header>
      
      <main
        className="outlet"
      >
        <Outlet/>
      </main>
      
      <footer>
         <p>© 2026 S-Mall</p>
      </footer>
    </>
  )
}

export default MainLayout