
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
  await knex('projects').del()
  await knex('projects').insert([
    { id: 1, title: 'Project 1', description: 'Project 1 contents', link: 'https://github.com/brooklyn-lyndontonga/brooklyn.portfolio' },
    { id: 2, title: 'Project 2', description: 'Project 2 contents', link: 'https://github.com/brooklyn-lyndontonga/brooklyn.portfolio' },
    { id: 3, title: 'Project 3', description: 'Project 3 contents', link: 'https://github.com/brooklyn-lyndontonga/brooklyn.portfolio' },
  ])
}