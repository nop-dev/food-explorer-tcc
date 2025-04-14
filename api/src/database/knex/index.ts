import knex from "knex";
import config from "../../../knexfile.js";

const connection = knex(config);

export default connection;