interface HeaderProps {
	user_type: "admin" | "user";
}

import { IoBagOutline, IoExit, IoMenu } from "react-icons/io5";

import logo from "../../assets/logo.svg";
import { SearchBar } from "../SearchBar";

export function Header({ user_type }: HeaderProps) {
	return (
		<header className="grid grid-cols-[1fr_2fr_1fr] md:flex items-center justify-items-center justify-center sm:justify-around h-28 bg-dark-600 w-full md:gap-2">
			<IoMenu size={32} className="cursor-pointer text-white md:hidden" />

			<div
				id="logo-box"
				className="flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl font-bold font-roboto"
			>
				<div className="flex items-center gap-2">
					<img src={logo} alt="logo" className="w-8 sm:w-12 h-8 sm:h-12" />
					<h2 className="text-light-100 ">food explorer </h2>
				</div>

				{user_type === "admin" && (
					<h3 className="text-cake-200 text-sm">admin</h3>
				)}
			</div>

			<div id="search-box" className="items-center hidden md:flex w-[50%]">
				<SearchBar />
			</div>

			
				{user_type === "user" && (
					<div
						id="order-box"
						className="flex items-center jus md:py-3 md:px-8 md:bg-tomato-100 rounded-lg md:gap-2"
					>
						<IoBagOutline size={32} className="cursor-pointer text-white md:-ml-5" />
						<div className="mt-4 md:mt-0 text-light-100 text-sm bg-tomato-100 rounded-full w-5 h-5 md:bg-none flex items-center justify-center -ml-3 md:ml-4 m:-mr-2 ">
							<span className="hidden md:block mr-1">Pedidos</span> 0
						</div>
					</div>
				)}

				<div id="exit-box" className="items-center gap-2 hidden md:flex">
					<IoExit size={32} className="cursor-pointer text-white" />
				</div>

		</header>
	);
}
