import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { User } from './user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) { }

    async followSomeone(userID: ObjectId) {
        // წესით id-იდ უნდა ავიღო ავტორიზებული მომხმარებლის id
        const id = '61fea9ede3751cf60d6f689e';
        await this.usersRepository.followSomeone(id, userID);
    }

    async findOne(username: string): Promise<User> {
        return await this.usersRepository.findOne(username);
    }

    async findById(id: string): Promise<User> {
        return await this.usersRepository.findById(id);
    }
}
