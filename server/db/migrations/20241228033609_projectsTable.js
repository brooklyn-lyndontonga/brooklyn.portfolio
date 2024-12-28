exports.up = async (knex) => {
  await knex.schema.createTable('projects', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.string('description');
    table.string('link');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('projects');
};