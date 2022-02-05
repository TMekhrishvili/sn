import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) { }

    async followSomeone(userID: ObjectId) {
        // წესით id-იდ უნდა ავიღო ავტორიზებული მომხმარებლის id
        const id = '61fea9ede3751cf60d6f689e';
        await this.usersRepository.followSomeone(id, userID);
    }
}
