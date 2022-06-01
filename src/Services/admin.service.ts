import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/Models/admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminsRepository: Repository<Admin>,
  ) {}

  createSudent(obj: Admin) {
    const student = this.adminsRepository.create(obj);
    this.adminsRepository.save(student);

    return student;
  }

  findAll(): Promise<Admin[]> {
    return this.adminsRepository.find();
  }

  async findOne(id): Promise<Admin> {
    const user = await this.adminsRepository.findOne({
      where: { id: id },
    });
    // console.log(user);
    if (user) {
      return user;
    }

    throw new NotFoundException();
  }

  async remove(id: number): Promise<void> {
    await this.adminsRepository.delete(id);
  }
}
