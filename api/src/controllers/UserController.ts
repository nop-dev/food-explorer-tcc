import knex from "../database/knex/index.js";
import AppError from "../utils/AppError.js";

import bcrypt from "bcrypt";

class UserController {
	async create(req, res) {
		const { name, email, password } = req.body;

		if (!name) {
			throw new AppError("Nome não encontrado...");
		}

		if (!email) {
			throw new AppError("Email não encontrado...");
		}

		if (await knex("users").where({ email }).first()) {
			throw new AppError("Email já cadastrado...");
		}

		if (!password) {
			throw new AppError("Senha não encontrada...");
		}

		if (password.length < 6) {
			throw new AppError("Senha deve conter no mínimo 6 caracteres...");
		}

		if (password.length > 12) {
			throw new AppError("Senha deve conter no máximo 12 caracteres...");
		}

		const hashPassword = await bcrypt.hash(password, 8);

		await knex("users").insert({
			name,
			email,
			password: hashPassword,
		});

		return res.json({ name, email, password });
	}

	async update(req, res) {
		const { name, email, old_password, new_password } = req.body;
		const user_id = Number(req.params.user_id);

		const cookieId = Number(JSON.parse(req.cookies.user).id);

		if (cookieId !== user_id) {
			throw new AppError("Você só pode atualizar seu próprio perfil");
		}

		if (old_password && new_password) {
			const user = await knex("users").where({ id: cookieId }).first();

			const checkIfPasswordMatch = await bcrypt.compare(old_password, user.password);

			if (!checkIfPasswordMatch) {
				throw new AppError("Senha incorreta...");
			}

			const hashPassword = await bcrypt.hash(new_password, 8);

			await knex("users").where({ id: cookieId }).update({
				password: hashPassword,
				updated_at: knex.fn.now()
			});
		}

		await knex("users").where({ id: cookieId }).update({
			name,
			email,
			updated_at: knex.fn.now()
		});

		return res.json("Usuário atualizado com sucesso...").status(201);
	}

	async profile(req, res) {
		const userId = JSON.parse(req.cookies.user).id;
		
		const user = await knex("users")
			.where({ id: userId })
			.select("id", "name", "email")
			.first();
			
		if (!user) {
			throw new AppError("Usuário não encontrado");
		}
		
		return res.json(user);
	}
}

export { UserController };
