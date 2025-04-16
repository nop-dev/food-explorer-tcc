import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("dishes", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("category").notNullable();
    table.decimal("price").notNullable();
    table.string("description").notNullable();
    table.string("ingredients").notNullable();
    table.string("image").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("dishes");
}