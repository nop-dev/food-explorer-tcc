import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignIn() {
	return (
		<div className="flex flex-col md:flex-row bg-dark-400 min-h-screen w-screen justify-center items-center">
			<section
				id="logo-section"
				className="flex items-center justify-center gap-2 md:gap-4 py-8 md:py-0 w-full"
			>
				<img
					src={logo}
					alt="logo"
					className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] xl:w-20 xl:h-20 object-cover"
				/>
				<h2 className="text-light-100 text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-6xl font-bold font-roboto">
					food explorer
				</h2>
			</section>

			<section
				id="form-section"
				className="w-full flex flex-col items-center justify-center gap-2 px-4"
			>
				<form className="flex flex-col gap-4 w-full max-w-[476px] p-10 md:bg-dark-700  rounded-lg">
					<h1 className="text-light-100 text-3xl lg:text-4xl font-bold font-roboto text-center">
						Faça o seu login
					</h1>

					<Input
						name="email"
						placeholder="E-mail"
						type="email"
						onChange={() => {}}
						label="E-mail"
					/>
					<Input
						name="password"
						placeholder="Senha"
						type="password"
						onChange={() => {}}
						label="Senha"
					/>

					<Button type="submit" className="mt-2">
						Entrar
					</Button>

					<Link
						to="/signup"
						className="text-light-100 font-medium text-sm font-poppins text-center mt-2
					"
					>
						Criar uma conta
					</Link>
				</form>
			</section>
		</div>
	);
}
