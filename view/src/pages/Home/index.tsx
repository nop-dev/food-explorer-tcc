import { Header } from "../../components/Header";

import homeimg from "../../assets/homeimg.png";

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
			</main>
		</div>
	);
}
