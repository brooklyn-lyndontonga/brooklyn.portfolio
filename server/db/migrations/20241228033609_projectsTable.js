/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary();
    table.date('date');
    table.string('title');
    table.string('description');
    table.string('link');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex)  {
  return knex.schema.dropTableIfExists('projects');
};