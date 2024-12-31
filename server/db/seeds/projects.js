export async function seed(knex) {
  await knex('projects').insert([
    { title: 'Project 1', description: 'Project 1 contents', link: 'https://github.com/brooklyn-lyndontonga/brooklyn.portfolio', date: '2025-01-01' },
    { title: 'Project 2', description: 'Project 2 contents', link: 'https://github.com/brooklyn-lyndontonga/brooklyn.portfolio', date: '2025-01-01' },
    { title: 'Project 3', description: 'Project 3 contents', link: 'https://github.com/brooklyn-lyndontonga/brooklyn.portfolio', date: '2025-01-01' },
  ]);
}