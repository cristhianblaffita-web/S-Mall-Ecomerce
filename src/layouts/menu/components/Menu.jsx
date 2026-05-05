import "./Menu.css";
import { CgClose } from "react-icons/cg";
import { BiMoon, BiSun } from "react-icons/bi";
import { useCategories } from "@/hooks/useCategories";
import { useTheme } from "@/contexts/theme/useTheme";
import { capitalize } from "@/utils/format";
import { Link } from "react-router-dom";
import DataStateHandler from "@/features/ui_states/DataStateHandler"
import CategoriesLoading from "@/features/ui_states/categories_state/CategoriesLoading";
import ErrorState from "@/features/ui_states/error_state/ErrorState";

const Menu = (
  {
    toggleMenu,
    isOpen,
    products,
    productsLoading,
    productsError
  }
) => {
  const categories = useCategories(products);
  const { theme, toggleTheme } = useTheme();

  return (
    <aside
      className={`menu-navbar ${isOpen ? "open" : ""} flex-col p-16 font-base`}
    >
      <div className="close-btn-container">
        <button
          className="close-btn absolute w-18px bdr-0"
          onClick={toggleMenu}
        >
         <CgClose className="ui-icon"/>
        </button>
      </div>

      <div className="menu-section">
        <h2>Categories</h2>
        <hr />
        <DataStateHandler
          isLoading={productsLoading}
          loadingComponent={<CategoriesLoading/>}
          error={productsError}
          errorComponent={<ErrorState error={productsError}/>}
        >
          <ul className="menu-list">
            {categories.map((category) => (
              <Link
                key={category}
                className="menu-item decoration-none text-gray"
                to={`/products?category=${category}`}
                onClick={toggleMenu}
              >
                {capitalize(category)}
              </Link>
            ))}
          </ul>
        </DataStateHandler>
      </div>

      <div className="menu-section">
        <h2>Options</h2>
        <hr />
        <ul className="menu-list">
          <Link
            className="menu-item decoration-none text-gray"
            to={`/cart`}
            onClick={toggleMenu}
          >
            My orders
          </Link>
          <Link 
            className="menu-item decoration-none text-gray"
            to={`/account`}
            onClick={toggleMenu}
          >My Account</Link>
          <Link
            className="menu-item decoration-none text-gray"
            to={`/login`}
            onClick={toggleMenu}
          >
            Login
          </Link>
        </ul>
      </div>

      <div className="menu-section">
        <h2>Preferences</h2>
        <hr />
        <button 
          className="menu-item bg-transparent bdr-0 cursor-pointer decoration-none text-gray flex items-center gap-8"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <>
              <BiMoon className="ui-icon" />
              Dark Mode
            </>
          ) : (
            <>
              <BiSun className="ui-icon" />
              Light Mode
            </>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Menu;
