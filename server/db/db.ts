import connection from './connection';

const db = connection

//get all
export async function getAllProjects() {
 return db('projects').select('*');
}

//get by date
export async function getPostByDate() {
  return db('projects').select('*').where('date', '2025-01-01');
}

//add project
export async function addProject() {
  return db('projects').insert({ title: 'New Project', content: 'This is the content of the new project' }).returning('*');
}

//update project
export async function updateProject() {
  return db('projects').where('id', 1).update({ title: 'Updated Project', content: 'This is the updated content of the project' }).returning('*');
}

//delete project
export async function deleteProject(id: number) {
  return db('project').where('id', id).delete();
}


export { connection };

