import { Outlet } from "react-router-dom"
import NavBar from "@/layouts/navbar/components/NavBar"
import "./MainLayout.css"
import Menu from "@/layouts/menu/components/Menu"

const MainLayout = () => {
  
  return (
    <>
      <header>
        <NavBar/>
        <Menu/>
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