import { createContext, useContext, useState } from "react";

const FilterContext = createContext(null);
export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
	const [filterData, setFilterData] = useState({
		priceRange: 1500,
		gender: [],
		size: [],
		brand: [],
		sortBy:"",
	});

	return (
		<FilterContext.Provider value={{ filterData, setFilterData }}>
			{children}
		</FilterContext.Provider>
	);
};
