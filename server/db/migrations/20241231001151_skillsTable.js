export async function up(knex) {
  await knex.schema.createTable('skills', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('level').notNullable();
    table.string('description').notNullable();
    table.string('project_id').unsigned().references('id').inTable('projects');
  });
}

export async function down(knex) {
  await knex.schema.dropTable('skills');
}