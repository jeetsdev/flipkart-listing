export const ProductCard = ({ product }) => {
	return (
		<div className="product-card flex flex-col border-2 rounded overflow-hidden">
			<div className="">
				<img
					src={product?.img}
					alt={product?.title}
					className="object-cover"
				/>
			</div>
			<div className="flex flex-col px-2 justify-between bg-slate-100 h-full">
				<div className="">
					<p className="">{product?.title}</p>
					<p className="text-xl text-sky-400">{product?.price}</p>
					<p className="text-gray-500">{product?.brand}</p>
				</div>
				<div className="flex gap-4 mb-4">
					{product?.size.map((ele) => {
						return (
							<p
								key={ele}
								className="border-2 px-2 text-blue-400 rounded"
							>
								{ele}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
};
