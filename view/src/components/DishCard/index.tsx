import { useState } from "react";
import { Link } from "react-router-dom";

import {
	IoChevronForwardOutline,
	IoHeartOutline,
	IoRemove,
	IoAddSharp,
	IoPencilSharp,
} from "react-icons/io5";

import { Button } from "../Button";

interface DishCardProps {
	id: string;
	image: string;
	title: string;
	price: string;
	description: string;
	user_type: "admin" | "user";
}

export function DishCard({ image, title, price, description, id, user_type }: DishCardProps) {
	const [quantity, setQuantity] = useState(0);

	const handleAdd = () => {
		setQuantity(quantity + 1);
	}

	const handleRemove = () => {	
		setQuantity(quantity - 1);
	}

	return (
		<div className="w-[210px] md:w-[304px] bg-dark-200 rounded-lg p-6 gap-3 flex flex-col justify-center items-center">
			<div className="w-full h-[88px] md:h-[176px] flex items-center justify-center">
				<img src={image} alt={title} className="w-full h-full object-contain" />
				{user_type === "admin" && (
					<IoPencilSharp className="relative -top-20 text-2xl text-light-300" />
				)}
				
				{user_type === "user" && (
					<IoHeartOutline className="relative -top-20 text-2xl text-light-300" />
				)}
			</div>
			<h3 className="text-light-300 flex items-center gap-1 font-poppins font-medium text-sm md:text-xl mt-3">
				{title}{" "}
				<IoChevronForwardOutline
					className="text-xl"
					onClick={() => <Link to={`/dishes/${id}`} />}
				/>
			</h3>
			<p className="text-light-400 font-poppins text-xs md:text-sm text-center">
				{description}
			</p>
			<span className="text-cake-200 font-roboto text-base md:text-2xl">
				R$ {price}
			</span>

			{user_type === "user" && (
			<div id="actions" className="flex items-center gap-4">
				<span className="text-light-300 flex items-center gap-2 text-lg">
					<IoRemove onClick={handleRemove} />
					{quantity}
					<IoAddSharp onClick={handleAdd} />
				</span>

				<Button className="w-full">
					incluir
				</Button>
			</div>
			)}
		</div>
	);
}
