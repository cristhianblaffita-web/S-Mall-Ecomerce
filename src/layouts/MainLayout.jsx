import { Outlet } from "react-router-dom"
import NavBar from "@/layouts/navbar/components/NavBar"
import "./MainLayout.css"

const MainLayout = () => {
  
  return (
    <>
      <header>
        <NavBar/>
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