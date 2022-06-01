import { Teacher } from './../Models/teacher.entity';
import { NotFoundException } from '@nestjs/common';
import { User } from './../Models/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
  ) {}

  async createSudent(obj: any) {

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(obj.password, salt);
    obj.password = hash;


    const teacher = this.userRepository.create(obj);
    this.userRepository.save(teacher);

    return teacher;
  }



  async createTeacher(obj: any) {

    let body = obj.body; // get the body

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(body.password, salt);
    body.password = hash;   // hash the password

    let teacher = new Teacher();
    teacher = body;


    let user = new User();
    let authuser = obj.user; // get the auth user
    let dbuser = await this.findOne(authuser.id); // find the auth user 
    
    user = dbuser;

    const teacherinstance = this.teacherRepository.create(teacher); 
    teacherinstance.user =  user;
    this.teacherRepository.save(teacherinstance); // save the teacher

    // console.log(user)

    // teacherinstance.user = 

    // user.teachers = [teacherinstance]

    // this.userRepository.save(user);

    return teacherinstance;

    // return teacher;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id: id },
    });
    // console.log(user);
    if (user) {
      return user;
    }

    throw new NotFoundException();
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
