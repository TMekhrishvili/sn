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

    async addComment(postID: ObjectId, userID: ObjectId, comment: string): Promise<void> {
        await this.postModel.findByIdAndUpdate(postID, {
            $push: {
                comments: { userID, comment }
            }
        });
    }

    async likePost(postID: ObjectId, userID: ObjectId) {
        await this.postModel.findByIdAndUpdate(postID, {
            $push: {
                likes: userID
            }
        })
    }
}