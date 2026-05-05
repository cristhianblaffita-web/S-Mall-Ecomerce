import "./Menu.css";
import { CgClose } from "react-icons/cg";
import { BiMoon, BiSun, BiChevronDown } from "react-icons/bi";
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

      <div className="mt-16">

        <details className="menu-section bg-surface p-16 bdr-layout rounded-md shadow-sm mb-16" open>
          <summary className="menu-section-header cursor-pointer">
            <h2>Categories</h2>
            <BiChevronDown className="menu-chevron" />
          </summary>
          <DataStateHandler
            isLoading={productsLoading}
            loadingComponent={<CategoriesLoading/>}
            error={productsError}
            errorComponent={<ErrorState error={productsError}/>}
          >
            <ul className="menu-list mt-16">
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
        </details>

        <details className="menu-section bg-surface p-16 bdr-layout rounded-md shadow-sm mb-16" open>
          <summary className="menu-section-header cursor-pointer">
            <h2>Options</h2>
            <BiChevronDown className="menu-chevron" />
          </summary>
          <ul className="menu-list mt-16">
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
        </details>

        <details className="menu-section bg-surface p-16 bdr-layout rounded-md shadow-sm mb-16" open>
          <summary className="menu-section-header cursor-pointer">
            <h2>Preferences</h2>
            <BiChevronDown className="menu-chevron" />
          </summary>
          <button 
            className="menu-item bg-transparent bdr-0 cursor-pointer decoration-none text-gray flex items-center gap-8 mt-16"
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
        </details>
      </div>

    </aside>
  );
};

export default Menu;
