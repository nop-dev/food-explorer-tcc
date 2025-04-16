import knex from "../database/knex/index.js";
import AppError from "../utils/AppError.js";

class DishesController {
	async create(req, res) {
		const { name, category, price, description, ingredients } = req.body;

		if (!name) {
			throw new AppError("Informe o nome do prato...");
		}

		if (!category) {
			throw new AppError("Informe a categoria do prato...");
		}

		if (!price) {
			throw new AppError("Informe o preço do prato...");
		}

		if (!description) {
			throw new AppError("Informe a descrição do prato...");
		}

		if (!ingredients) {
			throw new AppError("Informe os ingredientes do prato...");
		}

		await knex("dishes").insert({
			name,
			category,
			price,
			description,
		});

		await knex("ingredients").insert(
			ingredients.map((ingredient) => ({
				name: ingredient,
				dish_id: knex("dishes").where("name", name).select("id").first(),
			})),
		);

		return res.json("Prato criado com sucesso...").status(201);
	}

	async update(req, res) {
		const { name, category, price, description, ingredients, image } = req.body;
		const dish_id = Number(req.params.dish_id);

    const checkIfDishExists = await knex("dishes").where({ id: dish_id }).first();

		if (!checkIfDishExists) {
			throw new AppError("Prato não encontrado...");
		}

		await knex("dishes").where({ id: dish_id }).update({
			name,
			category,
			price,
			description,
			image,
		});

		if (ingredients) {
			await knex("ingredients").where({ dish_id }).delete();
		}

		if (ingredients) {
			await knex("ingredients").insert(
				ingredients.map((ingredient) => ({
					name: ingredient,
					dish_id,
				})),
			);
		}

		return res.json("Prato atualizado com sucesso...").status(201);
	}

	async delete(req, res) {
		const dish_id = Number(req.params.dish_id);

    const checkIfDishExists = await knex("dishes").where({ id: dish_id }).first();

		if (!checkIfDishExists) {
			throw new AppError("Prato não encontrado...");
		}

		await knex("dishes").where({ id: dish_id }).delete();

		await knex("ingredients").where({ dish_id }).delete();

		return res.json("Prato deletado com sucesso...").status(201);
	}
}

export { DishesController };
