import { Body, Controller, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('follow')
    followSomeone(@Body('userID') userID: ObjectId) {
        this.usersService.followSomeone(userID);
    }
}
