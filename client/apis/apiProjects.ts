import request from 'superagent'
import { Project } from '../../models/projects'

//get projects
export async function getProjects() {
  const response = await request.get('/api/v1/projects')
  return response.body
}

//add projects
export async function addProject(project: Project) {
  const response = await request.post('/api/v1/projects').send(project)
  return response.body
}

//update projects
export async function updateProject(project: Project) {
  const response = await request.put(`/api/v1/projects/${project.id}`).send(project)
  return response.body
}

//delete projects by id
export async function deleteProject(id: number) {
  const response = await request.delete(`/api/v1/projects/${id}`)
  return response.body
}

export type { Project }

