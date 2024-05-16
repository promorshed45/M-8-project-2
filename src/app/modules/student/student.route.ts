import express from 'express';
import { Studentcontroller } from './student.controller';

const router = express.Router();

// will call controller function
router.post('/create-student', Studentcontroller.createStudent);
router.get('/', Studentcontroller.getAllStudents);
router.get('/:id', Studentcontroller.getSingleStudent);

export const StudentRoute = router;
