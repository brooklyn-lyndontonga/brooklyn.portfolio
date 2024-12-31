import request from 'superagent';
import { About } from '../../models/about';

// get about data
export async function getAboutData() {
  const response = await request.get('/api/v1/about');
  return response.body;
}

// add about data
export async function addAboutData(data: About) {
  const response = await request.post('/api/v1/about').send(data);
  return response.body;
}

// update about data
export async function updateAboutData(data: About) {
  const response = await request.put(`/api/v1/about/${data.id}`).send(data);
  return response.body;
}

// delete about data by id
export async function deleteAboutData(id: number) {
  const response = await request.delete(`/api/v1/about/${id}`);
  return response.body;
}