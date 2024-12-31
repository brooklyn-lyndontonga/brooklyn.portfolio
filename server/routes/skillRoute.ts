// server/routes/skillRoute.ts

import express from 'express';
import { getSkills, addSkill, updateSkill, deleteSkill } from '../../client/apis/apiSkills';

const router = express.Router();


router.get('/skills', getSkills);
router.post('/skills', addSkill);
router.put('/skills/:id', updateSkill);
router.delete('/skills/:id', deleteSkill);

export default router;