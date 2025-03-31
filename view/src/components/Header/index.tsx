import { IoBagOutline, IoExit, IoMenu } from "react-icons/io5";
import logo from "../../assets/logo.svg";
import { SearchBar } from "../SearchBar";

interface HeaderProps {
	user_type: "admin" | "user";
}

interface LogoProps {
	isAdmin: boolean;
}

const Logo = ({ isAdmin }: LogoProps) => (
	<div className="relative flex items-center">
		<div className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold font-roboto whitespace-nowrap">
			<img src={logo} alt="logo" className="w-8 sm:w-12 h-8 sm:h-12" />
			<h2 className="text-light-100">food explorer</h2>
		</div>
		{isAdmin && (
			<h3 className="absolute -bottom-1.5 right-0 text-cake-200 text-[0.875rem]">
				admin
			</h3>
		)}
	</div>
);

const OrderButton = () => (
	<div className="flex items-center md:py-3 md:px-8 md:bg-tomato-100 rounded-lg gap-2 whitespace-nowrap">
		<IoBagOutline size={32} className="cursor-pointer text-white md:-ml-5" />
		<div className="mt-4 md:mt-0 text-light-100 text-sm bg-tomato-100 rounded-full w-5 h-5 md:bg-none flex items-center justify-center -ml-3 md:ml-4 m:-mr-2">
			<span className="hidden md:block mr-1">Pedidos</span> 0
		</div>
	</div>
);

const NewDishButton = () => (
	<button
		type="button"
		className="hidden md:flex items-center py-3 px-8 bg-tomato-100 rounded-lg gap-2 whitespace-nowrap"
	>
		<span className="text-light-100">Novo prato</span>
	</button>
);

export function Header({ user_type }: HeaderProps) {
	return (
		<header className="flex items-center justify-between px-4 md:px-8 lg:px-16 h-28 bg-dark-600 w-full gap-4">
			<IoMenu size={32} className="cursor-pointer text-white md:hidden" />

			<div className="flex-1 flex justify-center md:flex-none md:justify-start">
				<Logo isAdmin={user_type === "admin"} />
			</div>

			<div className="items-center hidden md:flex max-w-[50%] min-w-[280px] flex-1">
				<SearchBar />
			</div>

			{user_type === "admin" ? <NewDishButton /> : <OrderButton />}

			<div className="items-center gap-2 hidden md:flex">
				<IoExit size={32} className="cursor-pointer text-white" />
			</div>
		</header>
	);
}
