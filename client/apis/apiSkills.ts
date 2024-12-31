import request from 'superagent';
import { Skills } from '../../models/skills';

// get skills
export async function getSkills() {
  const response = await request.get('/api/v1/skills');
  return response.body;
}

// add skills
export async function addSkill(skill: Skills) {
  const response = await request.post('/api/v1/skills').send(skill);
  return response.body;
}

// update skills
export async function updateSkill(skill: Skills) {
  const response = await request.put(`/api/v1/skills/${skill.id}`).send(skill);
  return response.body;
}

// delete skills by id
export async function deleteSkill(id: number) {
  const response = await request.delete(`/api/v1/skills/${id}`);
  return response.body;
}

export type { Skills };