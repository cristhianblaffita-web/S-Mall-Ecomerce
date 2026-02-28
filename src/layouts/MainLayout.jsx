import { Outlet } from "react-router-dom"

const MainLayout = () => {
  
  return (
    <>
      <header>
        <h1>S-Mall</h1>
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