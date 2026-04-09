import "./MainLayout.css";
import { Outlet } from "react-router-dom";
import { CartProvider } from "@/contexts/cart/CartContext";

import useToggleMenu from "@/layouts/menu/hooks/useToggleMenu";
import useSearchSection from "@/layouts/search_section/hooks/useSearchSection";
import { useProducts } from "@/hooks/useProducts";

import NavBar from "@/layouts/navbar/components/NavBar";
import Menu from "@/layouts/menu/components/Menu";
import SearchSection from "@/layouts/search_section/components/SearchSection";
import Footer from "@/layouts/footer/Footer";

const MainLayout = () => {
  const {
    products,
    isLoading: productsLoading,
    error: productsError,
  } = useProducts("https://dummyjson.com/products?limit=0");

  const { isOpen, toggleMenu } = useToggleMenu();

  const {
    isOpen: searchOpen,
    toggleSearchSection,
    query,
    handleChange,
    handleClear,
  } = useSearchSection();

  return (
    <>
      <CartProvider>
        <header>
          <NavBar
            toggleMenu={toggleMenu}
            toggleSearchSection={toggleSearchSection}
          />
          <Menu 
            toggleMenu={toggleMenu} 
            isOpen={isOpen} 
            products={products} 
            productsLoading={productsLoading}
            productsError={productsError}
          />
          
          <SearchSection
            isOpen={searchOpen}
            handleBack={toggleSearchSection}
            query={query}
            handleChange={handleChange}
            handleClear={handleClear}
            products={products}
          />
        </header>

        <main className="outlet">
          <Outlet
            context={{
              query,
              products,
              productsLoading,
              productsError,
            }}
          />
        </main>

        <Footer />
      </CartProvider>
    </>
  );
};

export default MainLayout;
