import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./FiltersBar.css";

const SCALE = 100;
const STEP = 1;

const FiltersBar = ({ productsMaxPrice, productsMinPrice }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const minPrice = Number(searchParams.get("minPrice"));
  const maxPrice = Number(searchParams.get("maxPrice"));
  const rating = searchParams.get("rating") || "";

  const normalize = (price) => Math.round(price * SCALE);
  const denormalize = (value) => (value / SCALE).toFixed(2);

  const baseMin = productsMinPrice > 1 ? normalize(productsMinPrice) : 0;
  const baseMax = normalize(productsMaxPrice);

  const range = baseMax - baseMin || 1; 

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);

    if (!newParams.get("minPrice")) {
      newParams.set("minPrice", baseMin);
    }

    if (!newParams.get("maxPrice")) {
      newParams.set("maxPrice", baseMax);
    }

    setSearchParams(newParams);
  }, [productsMaxPrice, productsMinPrice]);

  const updateParams = (updates) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null) newParams.delete(key);
      else newParams.set(key, value);
    });

    setSearchParams(newParams);
  };

  const handleChange = (field, value) => {
    const numValue = Number(value);

    if (field === "minPrice") {
      const newMin = Math.min(numValue, maxPrice - 500);
      updateParams({ minPrice: newMin });
    } else if (field === "maxPrice") {
      const newMax = Math.max(numValue, minPrice + 500);
      updateParams({ maxPrice: newMax });
    } else {
      updateParams({ [field]: value || null });
    }
  };

  const handleReset = () => {
    updateParams({
      minPrice: baseMin,
      maxPrice: baseMax,
      rating: null,
    });
  };

  return (
    <div className="filters-bar bg-surface rounded-md p-16 mb-16 shadow-md">
      <div className="filters-container">
        <div className="filter-group">
          <label className="filter-label">Price</label>

          <div className="price-display-value">
            ${denormalize(minPrice)} - ${denormalize(maxPrice)}
          </div>

          <div className="range-slider-container">
            <div
              className="range-track"
              style={{
                left: `${((minPrice - baseMin) / range) * 100}%`,
                right: `${100 - ((maxPrice - baseMin) / range) * 100}%`,
              }}
            />

            <input
              type="range"
              className="range-input min"
              value={minPrice}
              min={baseMin}
              max={baseMax}
              step={STEP}
              onChange={(e) => handleChange("minPrice", e.target.value)}
              aria-label="Minimum price"
            />

            <input
              type="range"
              className="range-input max"
              value={maxPrice}
              min={baseMin}
              max={baseMax}
              step={STEP}
              onChange={(e) => handleChange("maxPrice", e.target.value)}
              aria-label="Maximum price"
            />
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-label">Rating</label>
          <select
            className="filter-select"
            value={rating}
            onChange={(e) => handleChange("rating", e.target.value)}
            aria-label="Filter by rating"
          >
            <option value="">All ratings</option>
            <option value="4">4+ ⭐</option>
            <option value="3">3+ ⭐</option>
          </select>
        </div>

        <button
          onClick={handleReset}
          className="reset-button"
          aria-label="Reset all filters"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FiltersBar;