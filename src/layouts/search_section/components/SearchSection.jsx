import "./SearchSection.css"
import { useNavigate } from "react-router-dom"
import previousIcon from "@/assets/icons/ui/arrow-back.png"
import clearIcon from "@/assets/icons/ui/remove.png"
import searchIcon from "@/assets/icons/navigation/search.png"
import useSearch from "@/hooks/useSearch"

const SearchSection = (
  {
    products,
    isOpen,
    handleBack,
    query,
    handleChange,
    handleClear
  }) => {

  const { results: searchResults } = useSearch(query, products)

  const navigate = useNavigate()

  const goToItemDetails = (id) => {
    handleClear()
    handleBack()
    navigate(`/products/${id}`)
  }

  return (
    <div className={`search-section ${isOpen ? "open" : ""}`}>
      <form 
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault()
          navigate(`/search?q=${query}`)
          handleBack()
          handleClear()
        }}
      >
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
      </form>
      <section
        className="results-container mt-16"
        style={{ height: "90%" }}
      >
        <ul
          className="h-full flex flex-col gap-16 overflow-y-auto"

        >
          {searchResults.length === 0 ? (
            <li className="text-sm text-gray p-12">
              No results found
            </li>
          ) : searchResults.map((res, index) => (
            <li
              key={res.id}
              onClick={() => goToItemDetails(res.id)}
              className="result-item flex gap-12 p-12 decoration-none cursor-pointer rounded-md bg-background"
            >
              <img
                src={res.thumbnail}
                className="w-32px bg-surface rounded-sm"
                alt={res.title}
              />
              <div className="flex flex-col">
              <h3 className="text-sm font-medium">{res.title}</h3>
              {res.category && (
                <span className="text-xs text-gray">
                  {res.category}
                </span>
              )}
            </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default SearchSection