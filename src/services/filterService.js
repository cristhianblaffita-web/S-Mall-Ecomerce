import { setDiscount } from "@/utils/setDiscount";

export const filterService = () => {

  const parseNumber = (value, defaultValue = 0) => {
    const num = Number(value);
    return isNaN(num) ? defaultValue : num;
  };

  const filterByRate = (data, rating = 0) => {
    const numericRating = parseNumber(rating, 0);
    return [...data]
      .filter(elem => parseNumber(elem.rating, 0) >= numericRating)
      .sort((a, b) => parseNumber(b.rating, 0) - parseNumber(a.rating, 0));
  };

  const filterByPrice = (data, minPrice = 0, maxPrice = Infinity) => {
    const min = parseNumber(minPrice, 0);
    const max = parseNumber(maxPrice, Infinity);

    return [...data]
      .filter(elem => {
        const price = setDiscount(elem.price, elem.discountPercentage);
        return price >= min && price <= max;
      })
      .sort((a, b) => setDiscount(a.price, a.discountPercentage) - setDiscount(b.price, b.discountPercentage));
  };


  const filterFromURL = (data, searchParams) => {
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const rating = searchParams.get("rating");

    let result = data;
    if (rating) result = filterByRate(result, rating);
    if (minPrice || maxPrice) result = filterByPrice(result, minPrice, maxPrice);

    return result;
  };

  return { filterByRate, filterByPrice, filterFromURL };
};