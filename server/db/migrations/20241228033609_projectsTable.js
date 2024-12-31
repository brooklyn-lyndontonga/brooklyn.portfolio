exports.up = async function(knex) {
  await knex.schema.createTable('projects', function(table) {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.string('link').notNullable();
    table.date('date').notNullable();
    table.integer('skill_id').unsigned().references('id').inTable('skills');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('projects');
};