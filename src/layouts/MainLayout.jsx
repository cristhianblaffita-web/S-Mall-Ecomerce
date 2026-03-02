import { Outlet } from "react-router-dom"
import NavBar from "@/layouts/navbar/components/NavBar"
import "./MainLayout.css"
import Menu from "@/layouts/menu/components/Menu"
import SearchSection from "@/layouts/search_section/components/SearchSection"

import useToggleMenu from "@/layouts/menu/hooks/useToggleMenu"
import useSearchSection from "@/layouts/search_section//hooks/useSearchSection"

const MainLayout = () => {
  const {isOpen, toggleMenu } = useToggleMenu()
  
  const {
    isOpen: searchOpen,
    toggleSearchSection,
    query,
    handleChange,
    handleClear,
    handleSubmit
  } = useSearchSection()
  
  return (
    <>
      <header>
        <NavBar 
          toggleMenu={toggleMenu}
          toggleSearchSection={toggleSearchSection}
        />
        <Menu
          toggleMenu={toggleMenu}
          isOpen={isOpen}
        />
        <SearchSection 
          isOpen={searchOpen}
          handleBack={toggleSearchSection}
          query={query}
          handleChange={handleChange}
          handleClear={handleClear}
          handleSubmit={handleSubmit}
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