import { Carousel } from "../../components/Carousel";
import { DishCard } from "../../components/DishCard";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import dessert1 from "../../assets/dessert1.png";
import dessert2 from "../../assets/dessert2.png";
import dessert3 from "../../assets/dessert3.png";
import dessert4 from "../../assets/dessert4.png";
import dessert5 from "../../assets/dessert5.png";
import dessert6 from "../../assets/dessert6.png";
import food1 from "../../assets/food1.png";
import food2 from "../../assets/food2.png";
import food3 from "../../assets/food3.png";
import food4 from "../../assets/food4.png";
import food5 from "../../assets/food5.png";
import food6 from "../../assets/food6.png";
import homeimg from "../../assets/homeimg.png";

// Dados mockados para exemplo
const dishes = {
	refeicoes: [
		{
			id: "1",
			image: food1,
			title: "Salada Ravanello",
			price: "49,97",
			description:
				"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
		},
		{
			id: "2",
			image: food2,
			title: "Torradas de Parma",
			price: "25,97",
			description:
				"Presunto de parma e rúcula em um pão com fermentação natural",
		},
		{
			id: "3",
			image: food3,
			title: "Espaguete ao Alho",
			price: "79,97",
			description: "Massa fresca com alho frito, pimenta e sal",
		},
		{
			id: "4",
			image: food4,
			title: "Risoto de Cogumelos",
			price: "89,97",
			description: "Risoto cremoso com cogumelos frescos e ervas finas",
		},
		{
			id: "5",
			image: food1,
			title: "Salada Caesar",
			price: "45,97",
			description: "Alface romana, croutons, queijo parmesão e molho caesar",
		},
		{
			id: "6",
			image: food2,
			title: "Sanduíche de Frango",
			price: "32,97",
			description: "Pão artesanal com frango grelhado e vegetais frescos",
		},
	],
	sobremesas: [
		{
			id: "7",
			image: food5,
			title: "Torta de Chocolate",
			price: "39,97",
			description: "Torta de chocolate com recheio cremoso e calda de caramelo",
		},
		{
			id: "8",
			image: food6,
			title: "Cheesecake de Frutas",
			price: "45,97",
			description:
				"Cheesecake com geleia de frutas vermelhas e base de biscoito",
		},
		{
			id: "9",
			image: dessert1,
			title: "Mousse de Maracujá",
			price: "35,97",
			description: "Mousse cremosa de maracujá com calda de chocolate",
		},
		{
			id: "10",
			image: dessert2,
			title: "Pudim de Leite",
			price: "32,97",
			description: "Pudim tradicional com calda de caramelo",
		},
		{
			id: "11",
			image: food5,
			title: "Brownie com Sorvete",
			price: "42,97",
			description:
				"Brownie quente com sorvete de baunilha e calda de chocolate",
		},
		{
			id: "12",
			image: food6,
			title: "Tiramisu",
			price: "48,97",
			description: "Sobremesa italiana com café, mascarpone e cacau",
		},
	],
	bebidas: [
		{
			id: "13",
			image: dessert3,
			title: "Vinho Tinto",
			price: "159,97",
			description: "Vinho tinto seco da região da Toscana",
		},
		{
			id: "14",
			image: dessert4,
			title: "Vinho Branco",
			price: "149,97",
			description: "Vinho branco seco da região da Toscana",
		},
		{
			id: "15",
			image: dessert5,
			title: "Suco Natural",
			price: "19,97",
			description: "Suco natural de frutas da estação",
		},
		{
			id: "16",
			image: dessert6,
			title: "Água Mineral",
			price: "9,97",
			description: "Água mineral com ou sem gás",
		},
		{
			id: "17",
			image: dessert3,
			title: "Cerveja Artesanal",
			price: "24,97",
			description: "Cerveja artesanal da casa",
		},
		{
			id: "18",
			image: dessert4,
			title: "Refrigerante",
			price: "12,97",
			description: "Refrigerante em lata",
		},
	],
};

export function Home() {
	return (
		<div className="flex flex-col min-h-screen bg-dark-900">
			<Header user_type="admin" />

			<main className="flex-1 bg-dark-400">
				<section className="bg-gradient-to-r from-[#091E26] to-[#00131C] flex flex-col ssm:mx-auto mt-[44px] ssm:px-2 h-fit md:">
					<div className="relative w-full flex ssm:justify-center  items-center">
						<img
							src={homeimg}
							alt="Macarons coloridos e frutas"
							className="relative h-24 sm:h-32 md:h-44 lg:h-60 xl:h-72 -mb-1 md:-mb-1.5 lg:-mb-2 xl:-mb-2.5 -mt-4 "
						/>

						<div className="font-poppins text-light-300 flex flex-col">
							<h2 className="text-lg font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
								Sabores Inigualáveis
							</h2>
							<p className="text-xs font-light sm:text-base md:text-lg lg:text-xl xl:text-2xl">
								Sinta o cuidado do preparo com ingredientes selecionados
							</p>
						</div>
					</div>
				</section>

				<section id="options" className="flex flex-col gap-12 px-6 py-12">
					<div id="refeicoes" className="flex flex-col gap-6">
						<h2 className="text-light-300 font-poppins text-2xl md:text-3xl">
							Refeições
						</h2>
						<Carousel>
							{dishes.refeicoes.map((dish) => (
								<DishCard
									key={dish.id}
									image={dish.image}
									title={dish.title}
									price={dish.price}
									description={dish.description}
									id={dish.id}
									user_type="user"
								/>
							))}
						</Carousel>
					</div>

					<div id="sobremesas" className="flex flex-col gap-6">
						<h2 className="text-light-300 font-poppins text-2xl md:text-3xl">
							Sobremesas
						</h2>
						<Carousel>
							{dishes.sobremesas.map((dish) => (
								<DishCard
									key={dish.id}
									image={dish.image}
									title={dish.title}
									price={dish.price}
									description={dish.description}
									id={dish.id}
									user_type="user"
								/>
							))}
						</Carousel>
					</div>

					<div id="bebidas" className="flex flex-col gap-6">
						<h2 className="text-light-300 font-poppins text-2xl md:text-3xl">
							Bebidas
						</h2>
						<Carousel>
							{dishes.bebidas.map((dish) => (
								<DishCard
									key={dish.id}
									image={dish.image}
									title={dish.title}
									price={dish.price}
									description={dish.description}
									id={dish.id}
									user_type="user"
								/>
							))}
						</Carousel>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
