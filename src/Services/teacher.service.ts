import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from '../Models/teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teachersRepository: Repository<Teacher>,
  ) {}

  createSudent(obj: Teacher) {
    const teacher = this.teachersRepository.create(obj);
    this.teachersRepository.save(teacher);

    return teacher;
  }

  createUser(obj: Teacher) {
    const teacher = this.teachersRepository.create(obj);
    this.teachersRepository.save(teacher);

    return teacher;
  }

  findAll(): Promise<Teacher[]> {
    return this.teachersRepository.find();
  }

  findOne(id): Promise<Teacher> {
    return this.teachersRepository.findOneOrFail(id);
  }

  async remove(id: number): Promise<void> {
    await this.teachersRepository.delete(id);
  }
}
