import knex from "../database/knex/index.js";
import AppError from "../utils/AppError.js";

import { compare } from "bcrypt";

class SessionsController {
	async create(req, res) {
		const { email, password } = req.body;

		if (!email) {
			throw new AppError("Informe o email...");
		}

		if (!password) {
			throw new AppError("Informe a senha...");
		}

		const user = await knex("users").where({ email }).first();

		if (!user) {
			throw new AppError("Usuário não encontrado...");
		}

		const checkIfPasswordMatch = await compare(password, user.password);

		if (!checkIfPasswordMatch) {
			throw new AppError("Senha incorreta...");
		}

		res.cookie(
			"user",
			JSON.stringify({
				id: user.id,
				name: user.name,
				email: user.email,
			}),
			{
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				maxAge: 24 * 60 * 60 * 1000, // 1 dia
			},
		);

		return res.json("Sessão criada com sucesso...").status(201);
	}

	async logout(req, res) {
		res.clearCookie('user');
		return res.json("Sessão encerrada com sucesso...").status(200);
	}
}

export { SessionsController };
