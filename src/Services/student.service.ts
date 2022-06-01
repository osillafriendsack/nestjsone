import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../Models/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ) {}

  createSudent(obj: Student) {
    const student = this.studentsRepository.create(obj);
    this.studentsRepository.save(student);

    return student;
  }

  findAll(): Promise<Student[]> {
    return this.studentsRepository.find();
  }

  findOne(id): Promise<Student> {
    console.log(id);
    return this.studentsRepository.findOneOrFail({
      where: { id: id },
    });
  }

  async remove(id: number): Promise<void> {
    await this.studentsRepository.delete(id);
  }
}
