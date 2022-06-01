import { TeacherService } from '../Services/teacher.service';

import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('/api/teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  getAllStudents() {
    return this.teacherService.findAll();
  }

  @Get(':id')
  getaStudents(@Param('id') id: number) {
    return this.teacherService.findOne(id);
  }

  @Post()
  createStudent(@Body() teacher) {
    return this.teacherService.createSudent(teacher);
  }
}
