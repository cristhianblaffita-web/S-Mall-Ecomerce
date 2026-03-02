import { useState } from "react"
import "./SearchSection.css"

import previousIcon from "@/assets/icons/ui/arrow-back.png"
import clearIcon from "@/assets/icons/ui/remove.png"
import searchIcon from "@/assets/icons/navigation/search.png"

const SearchSection = ({ onBack, onSearch }) => {
  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch?.(query)
  }

  const handleClear = () => {
    setQuery("")
  }

  return (
    <div className="search-section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-container">

          <button
            type="button"
            className="icon-button"
            onClick={onBack}
            aria-label="Go back"
          >
            <img src={previousIcon} alt="" />
          </button>

          <input
            className="search-input"
            placeholder="Search in S-Mall"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
    </div>
  )
}

export default SearchSection