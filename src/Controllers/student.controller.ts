import { Student } from '../Models/student.entity';
import { StudentService } from '../Services/student.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('/api/student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAllStudents() {
    return this.studentService.findAll();
  }

  @Get(':id')
  getaStudents(@Param('id') id: number) {
    return this.studentService.findOne(id);
  }

  @Post()
  createStudent(@Body() student) {
    return this.studentService.createSudent(student);
  }
}
