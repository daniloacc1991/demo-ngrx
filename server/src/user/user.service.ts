import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserGateway } from './user.gateway';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    private readonly usersGateway: UserGateway,
  ) {
  }

  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    const newUser = await this.usersRepository.save(user);
    this.usersGateway.createLive(newUser);
    return newUser;
  }

  async findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userDB = await this.usersRepository.findOne({ where: { id } });
    const userTmp = this.usersRepository.merge(userDB, updateUserDto);
    await this.usersRepository.update(id, userTmp);
    const userUpdated = await this.usersRepository.findOne({ where: { id } });
    this.usersGateway.updateLive(userUpdated);
    return userUpdated;
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
    this.usersGateway.deleteLive(id);
  }
}
