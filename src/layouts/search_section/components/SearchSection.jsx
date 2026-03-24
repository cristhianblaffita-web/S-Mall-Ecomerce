import "./SearchSection.css"
import previousIcon from "@/assets/icons/ui/arrow-back.png"
import clearIcon from "@/assets/icons/ui/remove.png"
import searchIcon from "@/assets/icons/navigation/search.png"

const SearchSection = (
  {
    isOpen,
    handleBack,
    query,
    handleChange,
    handleClear,
    searchResults
  }) => {

  return (
    <div className={`search-section ${isOpen ? "open" : ""}`}>
      <form className="search-form">
        <div className="search-container">

          <button
            type="button"
            className="icon-button"
            onClick={handleBack}
            aria-label="Go back"
          >
            <img src={previousIcon} alt="" />
          </button>

          <input
            className="search-input"
            placeholder="Search in S-Mall"
            value={query}
            onChange={(e) => handleChange(e)}
          />

          {query && (
            <button
              type="button"
              className="icon-button"
              onClick={handleClear}
              aria-label="Clear search"
            >
              <img src={clearIcon} alt="" />
            </button>
          )}

          <button
            type="submit"
            className="icon-button"
            aria-label="Search"

          >
            <img src={searchIcon} alt="" />
          </button>

        </div>
        <section>
          <ul>
            {searchResults.length === 0 ? false : searchResults.map((res, index) => (
              <li
                key={index}
              >
                <h3>{res.title}</h3>
                <p>{res.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </form>
    </div>
  )
}

export default SearchSection