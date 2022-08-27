import { BsCartFill } from "react-icons/bs";
import { RiLoginCircleFill } from "react-icons/ri";

export const Header = () => {
	return (
		<div className="flex h-12 items-center px-4 bg-slate-300">
			<h2>Flipkart</h2>
			<div className="flex ml-auto gap-2">
				<div className="flex items-center justify-center border-2 py-1 px-2 hover:cursor-pointer rounded">
					<RiLoginCircleFill />
					Login
				</div>
				<div className="flex items-center justify-center border-2 py-1 px-2 hover:cursor-pointer rounded">
					<BsCartFill />
					Cart
				</div>
			</div>
		</div>
	);
};
