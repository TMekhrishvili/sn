import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, userDocument, UserSchema } from './user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    exports: [UsersService],
    providers: [UsersService, UsersRepository],
    controllers: [UsersController]
})
export class UsersModule { }
