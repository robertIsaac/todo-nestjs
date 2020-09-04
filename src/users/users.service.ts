import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {
  }

  async findOne(username: string): Promise<UserEntity | undefined> {
    return this.usersRepository.findOne({username });
  }

  async findById(id: string): Promise<Omit<UserEntity, 'password'> | undefined> {
    const { password, ...user } = await this.usersRepository.findOne(id);
    return user;
  }

  async insert(user: UserEntity): Promise<InsertResult | false> {
    try {
      return await this.usersRepository.insert(user);
    }
    catch (e) {
      return false;
    }
  }
}
