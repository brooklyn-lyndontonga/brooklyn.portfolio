export async function up(knex) {
  await knex.schema.createTable('projects', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('link').notNullable();
    table.date('date').notNullable();
  });
}

export async function down(knex) {
  await knex.schema.dropTable('projects');
}

