import React, { useEffect } from "react";
import { useFilter } from "../contexts/filter-context";

export const Filter = () => {
	const { filterData, setFilterData } = useFilter();

	// Gender click handler here
	const genderChangeHandler = (labelText) => {
		setFilterData({
			...filterData,
			gender: filterData.gender.includes(labelText)
				? filterData.gender.filter((gen) => gen !== labelText)
				: [...filterData.gender, labelText],
		});
	};

	// Brand click handler here
	const brandChangeHandler = (labelText) => {
		setFilterData({
			...filterData,
			brand: filterData.brand.includes(labelText)
				? filterData.brand.filter((ele) => ele !== labelText)
				: [...filterData.brand, labelText],
		});
	};
	// Size click handler here
	const sizeChangeHandler = (labelText) => {
		setFilterData({
			...filterData,
			size: filterData.size.includes(labelText)
				? filterData.size.filter((ele) => ele !== labelText)
				: [...filterData.size, labelText],
		});
	};

	useEffect(() => {});
	return (
		<div>
			<h2 className="text-2xl">Sort & Filter</h2>

			{/* clear filter here */}
			<button
				className="border-2 py-1 px-2 my-2 border-red-300 rounded hover:cursor-pointer hover:border-red-500"
				onClick={() =>
					setFilterData({
						priceRange: 1500,
						gender: [],
						size: [],
						brand: [],
						sortBy: "",
					})
				}
			>
				Clear Filter
			</button>
			<div>
				<div>
					<p className="text-xl text-blue-400">Price</p>
					<input
						type="range"
						min={0}
						value={filterData?.priceRange}
						max={1500}
						onChange={(e) =>
							setFilterData({
								...filterData,
								priceRange: Number(e.target.value),
							})
						}
					/>
					<div className="text-sm">
						Max : {filterData?.priceRange}
					</div>
				</div>

				{/* Gender section here */}
				<div className="flex flex-col">
					<p className="text-xl text-blue-400">Gender</p>
					<div>
						<input
							type="checkbox"
							id="male"
							checked={filterData.gender.some(
								(gen) => gen === "Men",
							)}
							onChange={(e) => genderChangeHandler("Men")}
						/>
						<label
							htmlFor="male"
							className="hover:cursor-pointer ml-2"
						>
							Men
						</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="female"
							checked={filterData.gender.some(
								(gen) => gen === "Women",
							)}
							onChange={(e) => genderChangeHandler("Women")}
						/>
						<label
							htmlFor="female"
							className="hover:cursor-pointer ml-2"
						>
							Women
						</label>
					</div>
				</div>

				{/* Beand section here */}
				<div className="flex flex-col">
					<p className="text-xl text-blue-400">Brand</p>
					<div>
						<input
							type="checkbox"
							id="puma"
							checked={filterData.brand.some(
								(ele) => ele === "Puma",
							)}
							onChange={(e) => brandChangeHandler("Puma")}
						/>
						<label
							htmlFor="puma"
							className="hover:cursor-pointer ml-2"
						>
							Puma
						</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="metronaut"
							checked={filterData.brand.some(
								(ele) => ele === "Metronaut",
							)}
							onChange={(e) => brandChangeHandler("Metronaut")}
						/>
						<label
							htmlFor="metronaut"
							className="hover:cursor-pointer ml-2"
						>
							Metronaut
						</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="allen-solly"
							checked={filterData.brand.some(
								(ele) => ele === "Allen Solly",
							)}
							onChange={(e) => brandChangeHandler("Allen Solly")}
						/>
						<label
							htmlFor="allen-solly"
							className="hover:cursor-pointer ml-2"
						>
							Allen Solly
						</label>
					</div>
				</div>
				<div>
					<p className="text-xl text-blue-400">Size</p>
					<div>
						<input
							type="checkbox"
							id="size-s"
							checked={filterData.size.some((ele) => ele === "S")}
							onChange={(e) => sizeChangeHandler("S")}
						/>
						<label
							htmlFor="size-s"
							className="hover:cursor-pointer ml-2"
						>
							S
						</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="size-m"
							checked={filterData.size.some((ele) => ele === "M")}
							onChange={(e) => sizeChangeHandler("M")}
						/>
						<label
							htmlFor="size-m"
							className="hover:cursor-pointer ml-2"
						>
							M
						</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="size-l"
							checked={filterData.size.some((ele) => ele === "L")}
							onChange={(e) => sizeChangeHandler("L")}
						/>
						<label
							htmlFor="size-l"
							className="hover:cursor-pointer ml-2"
						>
							L
						</label>
					</div>
					<div>
						<input
							type="checkbox"
							id="size-xl"
							checked={filterData.size.some(
								(ele) => ele === "XL",
							)}
							onChange={(e) => sizeChangeHandler("XL")}
						/>
						<label
							htmlFor="size-xl"
							className="hover:cursor-pointer ml-2"
						>
							XL
						</label>
					</div>
				</div>
				<div>
					<p className="text-xl text-blue-400">Sort by </p>
					<div>
						<input
							type="radio"
							id="low-to-high"
							name="sort"
							checked={filterData.sortBy === "low-to-high"}
							onChange={(e) => {
								setFilterData({
									...filterData,
									sortBy: "low-to-high",
								});
							}}
						/>
						<label
							htmlFor="low-to-high"
							className="hover:cursor-pointer ml-2"
						>
							Low to High
						</label>
					</div>
					<div>
						<input
							type="radio"
							id="high-to-low"
							name="sort"
							checked={filterData.sortBy === "high-to-low"}
							onChange={(e) => {
								setFilterData({
									...filterData,
									sortBy: "high-to-low",
								});
							}}
						/>
						<label
							htmlFor="high-to-low"
							className="hover:cursor-pointer ml-2"
						>
							High to Low
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};
