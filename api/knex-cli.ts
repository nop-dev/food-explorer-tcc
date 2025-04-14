import knex from "knex";
import config from "./knexfile.js";
import { argv } from "node:process";

const db = knex(config);

// Extrair o comando da linha de comando
const command = argv[2];

async function run() {
  try {
    if (command === "migrate:latest") {
      await db.migrate.latest();
      console.log("Migrations executadas com sucesso!");
    } else if (command === "migrate:rollback") {
      await db.migrate.rollback();
      console.log("Rollback executado com sucesso!");
    } else {
      console.error("Comando não reconhecido:", command);
    }
  } catch (error) {
    console.error("Erro:", error);
  } finally {
    await db.destroy();
  }
}

run();