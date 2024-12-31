import express from 'express'
import {connection} from '../db/db'

const router = express.Router()

//get
router.get('/', async (req, res) => {
  const projects = await connection('projects').select('*')
  res.json(projects)
})

//post
router.post('/', async (req, res) => {
  const projects = await connection('projects').insert(req.body)
  res.json(projects)
})

//update
router.put('/:id', async (req, res) => {
  const projects = await connection('projects').where('id', req.params.id).update(req.body)
  res.json(projects)
})

//delete
router.delete('/:id', async (req, res) => {
  const projects = await connection('projects').where('id', req.params.id).delete()
  res.json(projects)
})


export default router