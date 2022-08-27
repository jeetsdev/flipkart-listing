import { Filter, Header, ProductCard } from "../components";
import { useFilter } from "../contexts/filter-context";
import productData from "../data/data.json";
import { filterProduct } from "../utils/filterProduct";
import "./ProductListing.css";

export const ProductListing = () => {
	const { filterData } = useFilter();
	const finalData = filterProduct(filterData, productData);
	console.log("finalData: ", finalData.lenght);

	return (
		<div className="">
			<nav>
				<Header />
			</nav>
			<div className="product-container ">
				<Filter />
				<div>
					{finalData.length === 0 ? (
						<p className="text-center text-3xl">
							No products found, please clear filters.
						</p>
					) : (
						<div className="flex flex-wrap gap-2">
							{finalData?.map((product) => {
								return (
									<ProductCard
										product={product}
										key={product.id}
									/>
								);
							})}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
