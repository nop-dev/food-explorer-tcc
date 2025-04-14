import type { Knex } from "knex";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Obter o equivalente a __dirname em ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "src", "database", "database.sqlite")
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
  },
  useNullAsDefault: true
};

export default config;
