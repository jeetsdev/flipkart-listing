export const filterProduct = (state, productData) => {
	if (state.priceRange !== 1500) {
		productData = productData.filter(
			(data) => data.price <= Number(state.priceRange),
		);
	}
	if (state.gender.length) {
		productData = productData.filter((data) => {
			return state.gender.includes(data.ideaFor);
		});
	}
	if (state.size.length) {
		productData = productData.filter((data) => {
			return data?.size?.some((ele) => state.size.includes(ele));
		});
	}
	if (state.brand.length) {
		productData = productData.filter((data) =>
			state.brand.includes(data.brand),
		);
	}
	if (state.sortBy !== "") {
		if (state.sortBy === "low-to-high") {
			productData = [...productData].sort((item1, item2) => {
				return item1.price - item2.price;
			});
		}
		if (state.sortBy === "high-to-low") {
			productData = [...productData].sort((item1, item2) => {
				return item2.price - item1.price;
			});
		}
	}
	return productData;
};
