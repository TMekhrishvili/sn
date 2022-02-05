import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Post, PostDocument } from "./post.schema";

@Injectable()
export class PostsRepository {
    constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) { }

    async createPost(userID: ObjectId, content: string): Promise<Post> {
        return await this.postModel.create({ userID, content });
    }
}