import { Outlet } from "react-router-dom"
import NavBar from "@/layouts/navbar/components/NavBar"

const MainLayout = () => {
  
  return (
    <>
      <header>
        <NavBar/>
      </header>
      
      <main>
        <Outlet/>
      </main>
      
      <footer>
         <p>© 2026 S-Mall</p>
      </footer>
    </>
  )
}

export default MainLayout