import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { User, userDocument } from "./user.schema";



export class UsersRepository {
    constructor(@InjectModel(User.name) private userModel: Model<userDocument>) { }

    async followSomeone(id: string, userID: ObjectId): Promise<void> {
        await this.userModel.findByIdAndUpdate(id, {
            $push: {
                followings: userID
            }
        })
    }

    async findOne(username: string): Promise<User> {
        return await this.userModel.findOne({ username });
    }

    async findById(id: string): Promise<User> {
        return await this.userModel.findById(id);
    }
}