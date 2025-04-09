import { useEffect, useState } from "react";
import {
	IoAddOutline,
	IoChevronBackOutline,
	IoClose,
	IoCloudUploadOutline,
} from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

export function DishArea() {
	const navigate = useNavigate();
	const { id } = useParams();
	const isEditing = !!id && id !== 'new';
	
	// Form state
	const [dishName, setDishName] = useState("");
	const [category, setCategory] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [dishImage, setDishImage] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const [ingredients, setIngredients] = useState<string[]>([]);
	const [newIngredient, setNewIngredient] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	// Fetch dish data if editing
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
		useEffect(() => {
		if (isEditing) {
			setIsLoading(true);
			// Simulated fetch - replace with actual API call
			setTimeout(() => {
				// Mock data - replace with actual API response
				const mockDish = {
					name: "Salada Ravanello",
					category: "refeicao",
					price: "49,97",
					description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
					ingredients: ["rabanete", "folhas verdes", "gergelim"],
					image: "https://example.com/image.jpg"
				};
				
				setDishName(mockDish.name);
				setCategory(mockDish.category);
				setPrice(mockDish.price);
				setDescription(mockDish.description);
				setIngredients(mockDish.ingredients);
				setImagePreview(mockDish.image);
				setIsLoading(false);
			}, 500);
		}
	}, [isEditing, id]);

	const handleAddIngredient = () => {
		if (newIngredient.trim() !== "") {
			setIngredients([...ingredients, newIngredient]);
			setNewIngredient("");
		}
	};

	const handleRemoveIngredient = (index: number) => {
		setIngredients(ingredients.filter((_, i) => i !== index));
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// biome-ignore lint/complexity/useOptionalChain: <explanation>
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			setDishImage(file);
			
			// Create preview
			const reader = new FileReader();
			reader.onload = (e) => {

				// biome-ignore lint/complexity/useOptionalChain: <explanation>
				if (e.target && e.target.result) {
					setImagePreview(e.target.result as string);
				}
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		
		// Form validation
		if (!dishName || !category || !price || !description || ingredients.length === 0) {
			alert("Por favor, preencha todos os campos obrigatórios");
			return;
		}
		
		// Create form data object
		const formData = new FormData();
		formData.append("name", dishName);
		formData.append("category", category);
		formData.append("price", price);
		formData.append("description", description);
		// biome-ignore lint/complexity/noForEach: <explanation>
		ingredients.forEach(ingredient => {
			formData.append("ingredients[]", ingredient);
		});
		if (dishImage) {
			formData.append("image", dishImage);
		}
		
		// Submit to API
		console.log("Submitting form:", Object.fromEntries(formData));
		// TODO: Replace with actual API call
		// isEditing ? updateDish(id, formData) : createDish(formData)
		
		navigate("/");
	};

	const handleCancel = () => {
		navigate("/");
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

				{isLoading ? (
					<div className="flex justify-center items-center h-[60vh]">
						<p className="text-light-100">Carregando...</p>
					</div>
				) : (
					<form className="p-2 max-w-[1120px] mx-auto" onSubmit={handleSubmit}>
						<legend className="font-poppins text-light-300 text-3xl font-medium ssm:text-center md:text-left mb-8">
							{isEditing ? "Editar prato" : "Novo prato"}
						</legend>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div id="image-wrapper" className="flex flex-col gap-2">
								<label htmlFor="dishImage" className="text-light-400 font-roboto">
									Imagem do prato
								</label>
								<div className="relative">
									{imagePreview && (
										<div className="mb-2">
											<img 
												src={imagePreview} 
												alt="Preview" 
												className="w-full h-32 object-cover rounded-lg"
											/>
										</div>
									)}
									<input
										type="file"
										id="dishImage"
										className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
										onChange={handleImageChange}
									/>
									<button
										type="button"
										className="flex items-center gap-2 bg-dark-800 text-light-100 py-3 px-4 rounded-lg hover:bg-dark-700 transition-colors w-full"
									>
										<IoCloudUploadOutline size={24} />
										<span className="text-sm font-medium">
											{imagePreview ? "Trocar imagem" : "Selecione imagem"}
										</span>
									</button>
								</div>
							</div>

							<div id="name-wrapper" className="flex flex-col gap-2">
								<Input
									name="dishName"
									placeholder="Ex: Salada Caesar"
									type="text"
									value={dishName}
									onChange={(e) => setDishName(e.target.value)}
									label="Nome"
								/>
							</div>

							<div id="category-wrapper" className="flex flex-col gap-2">
								<label htmlFor="category" className="text-light-400 font-roboto">
									Categoria
								</label>
								<select
									id="category"
									className="bg-dark-800 rounded-lg px-3.5 py-3 text-light-500 focus:border-none w-full"
									value={category}
									onChange={(e) => setCategory(e.target.value)}
								>
									<option value="">Selecione uma categoria</option>
									<option value="refeicao">Refeição</option>
									<option value="sobremesa">Sobremesa</option>
									<option value="bebida">Bebida</option>
								</select>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
							<div className="flex flex-col gap-2">
								<label
									htmlFor="ingredients"
									className="text-light-400 font-roboto block"
								>
									Ingredientes
								</label>
								<div className="flex flex-wrap gap-2 p-2 bg-dark-800 rounded-lg ">
									{ingredients.map((ingredient, index) => (
										<div
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={index}
											className="bg-light-600 text-light-100 py-1 px-3.5 rounded-lg text-sm flex items-center gap-1"
										>
											<span>{ingredient}</span>
											<button
												type="button"
												onClick={() => handleRemoveIngredient(index)}
												className="bg-transparent ml-1"
											>
												<IoClose size={16} className="text-light-100" />
											</button>
										</div>
									))}
									<div className="flex items-center gap-1 bg-none rounded-lg py-2 px-3 border-light-500 border border-dashed">
										<input
											type="text"
											id="ingredients"
											value={newIngredient}
											onChange={(e) => setNewIngredient(e.target.value)}
											placeholder="Adicionar"
											className="bg-dark-800 text-light-100 outline-none text-sm min-w-20"
											onKeyDown={(e) => {
												if (e.key === 'Enter') {
													e.preventDefault();
													handleAddIngredient();
												}
											}}
										/>
										<button
											type="button"
											onClick={handleAddIngredient}
											className="bg-transparent"
										>
											<IoAddOutline size={20} className="text-light-100" />
										</button>
									</div>
								</div>
							</div>

							<div id="price-wrapper" className="flex flex-col gap-2">
								<Input
									name="price"
									placeholder="R$ 00,00"
									type="text"
									value={price}
									onChange={(e) => setPrice(e.target.value)}
									label="Preço"
								/>
							</div>
						</div>

						<div className="mt-8">
							<label
								htmlFor="description"
								className="text-light-400 font-roboto block mb-2"
							>
								Descrição
							</label>
							<textarea
								id="description"
								placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
								className="bg-dark-800 rounded-lg px-3.5 py-3 text-light-500 focus:border-none w-full h-40 resize-none"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>

						<div className="flex justify-center md:justify-end mt-8 gap-4">
							{isEditing && (
								<Button 
									type="button" 
									className="w-full md:w-auto px-8 bg-dark-800 hover:bg-dark-700"
									onClick={handleCancel}
								>
									Cancelar
								</Button>
							)}
							<Button type="submit" className="w-full md:w-auto px-8">
								{isEditing ? "Salvar alterações" : "Criar prato"}
							</Button>
						</div>
					</form>
				)}
			</main>

			<Footer />
		</div>
	);
}
