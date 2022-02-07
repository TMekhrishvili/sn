import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from './users.service';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('follow')
    followSomeone(@Request() req, @Body('userID') userID: ObjectId) {
        this.usersService.followSomeone(req.user.userId, userID);
    }
}