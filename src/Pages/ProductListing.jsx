import { useEffect } from "react";
import { Filter, Header, ProductCard } from "../components";
import { useFilter } from "../contexts/filter-context";
import productData from "../data/data.json";
import { filterProduct } from "../utils/filterProduct";
import "./ProductListing.css";

export const ProductListing = () => {
	const { filterData } = useFilter();
	const finalData = filterProduct(filterData, productData);

	useEffect(() => {
		console.log("finalData: ", finalData);
	});
	return (
		<div className="">
			<nav>
				<Header />
			</nav>
			<div className="product-container ">
				<Filter />
				<div className="flex flex-wrap gap-2">
					{finalData?.map((product) => {
						return (
							<ProductCard product={product} key={product.id} />
						);
					})}
				</div>
			</div>
		</div>
	);
};
