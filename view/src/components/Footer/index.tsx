import logo from "../../assets/logo.svg";

export function Footer() {
	return (
		<footer className="bg-dark-600 h-[50px] flex items-center justify-center">
			<div className="flex items-center justify-between w-full px-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className=" w-6 md:w-8" />
          <p className="text-light-300 font-poppins font-medium text-xs md:text-sm text-center">Food Explorer</p>
        </div>

        <p className="text-light-300 font-poppins font-medium text-xs md:text-sm text-center">
          © 2025 - Todos os direitos reservados.
        </p>
      </div>
		</footer>
	);
}
