import { IoAddSharp, IoChevronBackOutline, IoRemove, IoReceiptOutline  } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";

import { useState } from "react";
import food1 from "../../assets/food1.png";

export function DishView() {
	const { id } = useParams();
	const navigate = useNavigate();

	const [quantity, setQuantity] = useState(0);

	const handleAdd = () => {
		setQuantity(quantity + 1);
	};

	const handleRemove = () => {
		setQuantity(quantity - 1);
	};

	return (
		<div>
			<Header user_type="admin" />

			<main className="flex-1 min-h-[calc(100vh-162px)] bg-dark-400 sm:px-4 md:px-16 lg:px-32">
				<button
					type="button"
					className="flex items-center gap-2 px-4 pt-4 pb-2 w-full"
					onClick={() => navigate("/")}
				>
					<IoChevronBackOutline
						size={24}
						className="text-light-100 cursor-pointer"
					/>
					<p className="text-light-100 font-poppins font-medium text-sm">
						Voltar
					</p>
				</button>

				<section
					id="content"
					className="flex flex-col md:flex-row items-center md:gap-12 pb-4"
				>
					<div
						id="image"
						className="flex flex-col gap-4 items-center w-screen sm:w-96"
					>
						<img
							src={food1}
							alt="food1"
							className="w-full max-w-[390px] max-h-[390px] md:max-w-[550px] md:max-h-[550px] rounded-lg p-7 md:p-0 md:mt-12"
						/>
					</div>

					<div
						id="description"
						className="flex flex-col items-center md:items-start gap-4 sm:w-3/5"
					>
						<h2 className="text-light-100 font-poppins font-medium text-2xl">
							Título do Prato
						</h2>
						<p className="text-light-100 font-poppins font-light text-sm px-4 sm:px-0 text-center md:text-left">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatem molestias a porro eligendi, eaque voluptatum nesciunt
							odio amet illum commodi soluta exercitationem doloremque ullam id
							consequatur animi vel recusandae nulla! Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Voluptatem molestias a porro
							eligendi, eaque voluptatum
						</p>

						<div id="ingredients" className="flex gap-2 flex-wrap">
							<Tag>alface</Tag>
							<Tag>tomate</Tag>
							<Tag>cebola</Tag>
						</div>

						<Button className="mt-4 w-2/4 sm:w-32 hidden">Editar Prato</Button>

						<div id="actions" className="flex items-center gap-4">
							<span className="text-light-300 flex items-center gap-2 text-lg">
								<IoRemove onClick={handleRemove} />
								{quantity}
								<IoAddSharp onClick={handleAdd} />
							</span>

							<Button className="w-full flex items-center gap-2"><IoReceiptOutline/>pedir - R$ 25,00</Button>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
