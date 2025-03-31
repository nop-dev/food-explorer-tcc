import { IoSearch } from "react-icons/io5";

export function SearchBar() {
	return (
		<label
			htmlFor="search"
			className="flex items-center gap-2 bg-dark-900 rounded-lg px-3.5 py-4 w-full"
		>
			<IoSearch size={24} className="text-gray-400" />
			<input
				type="text"
				id="search"
				placeholder="Pesquisar por prato ou ingredientes"
				className="w-full bg-dark-900 text-light-400 placeholder-gray-400 border-none outline-none focus:ring-0"
			/>
		</label>
	);
}
