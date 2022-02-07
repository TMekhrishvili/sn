import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { User } from './user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) { }

    async followSomeone(id: string, userID: ObjectId) {
        await this.usersRepository.followSomeone(id, userID);
    }

    async findOne(username: string): Promise<User> {
        return await this.usersRepository.findOne(username);
    }

    async findById(id: ObjectId): Promise<User> {
        return await this.usersRepository.findById(id);
    }

    async register(username: string, email: string, hash: string): Promise<User> {
        return await this.usersRepository.createUser(username, email, hash);
    }
}
