import { useSearchParams } from "react-router-dom";
import "./FiltersBar.css";

const FiltersBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();


  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const rating = searchParams.get("rating") || "";


  const handleChange = (field, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) newParams.set(field, value);
    else newParams.delete(field);
    setSearchParams(newParams);
  };

  const handleReset = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("minPrice");
    newParams.delete("maxPrice");
    newParams.delete("rating");
    setSearchParams(newParams);
  };

  return (
    <div className="bg-surface rounded-md p-16 mb-16 shadow-sm">
      <div className="flex flex-wrap gap-16 items-end">
        <div className="flex flex-col">
          <span className="text-xs text-gray mb-4">Price</span>
          <div className="flex gap-8">
            <input
              type="number"
              placeholder="Min"
              className="price-filter-input p-8 rounded-sm bg-background text-sm bdr-0"
              value={minPrice}
              onChange={(e) => handleChange("minPrice", e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              className="price-filter-input p-8 rounded-sm bg-background text-sm bdr-0"
              value={maxPrice}
              onChange={(e) => handleChange("maxPrice", e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-xs text-gray mb-4">Rating</span>
          <select
            className="p-8 rounded-sm bg-background text-sm bdr-0"
            value={rating}
            onChange={(e) => handleChange("rating", e.target.value)}
          >
            <option value="">All</option>
            <option value="4">4+ ⭐</option>
            <option value="3">3+ ⭐</option>
          </select>
        </div>

        <button
          onClick={handleReset}
          className="primary-button p-8 bdr-0 rounded-sm text-sm cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FiltersBar;