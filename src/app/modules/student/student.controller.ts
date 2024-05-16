import { Request, Response } from 'express';
import { StudentSevice } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = await req.body;

    // will call service function to send this data
    const result = await StudentSevice.createStudentIntoDB(studentData);

    // send respone
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentSevice.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'All student data get successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await StudentSevice.getSingleStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Single student get successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const Studentcontroller = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
