import express from 'express'
import {connection} from '../db/db'

const router = express.Router()

//get
router.get('/', async (req, res) => {
  const projects = await connection('projects').select('*')
  res.json(projects)
})

//post

//update

//delete


export default router