import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, userDocument } from "src/users/user.schema";


@Injectable()
export class AuthRepository {
    constructor(@InjectModel(User.name) private userModel: Model<userDocument>) { }

    async register(username: string, email: string, hash: string): Promise<User> {
        return await this.userModel.create({ username, email, hash })
    }

    async login() {

    }
}