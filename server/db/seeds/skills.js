export async function seed(knex) {
  await knex('skills').insert([
    { name: 'JavaScript', level: 'Advanced', description: 'Proficient in JavaScript', project: '*' },
    { name: 'Python', level: 'Intermediate', description: 'Knowledgeable in Python', project: '*' },
    { name: 'Java', level: 'Beginner', description: 'Familiar with Java', project: '*' },
    
  ]);
};