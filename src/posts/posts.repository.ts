import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Post, PostDocument } from "./post.schema";

@Injectable()
export class PostsRepository {
    constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) { }

    /**
     * create post
     * @param userID 
     * @param content 
     * @returns 
     */
    async createPost(userID: string, content: string): Promise<Post> {
        return await this.postModel.create({ userID, content });
    }

    /**
     * add comment on post
     * @param postID 
     * @param userID 
     * @param comment 
     */
    async addComment(postID: ObjectId, userID: string, comment: string): Promise<void> {
        await this.postModel.findByIdAndUpdate(postID, {
            $push: {
                comments: { userID, comment }
            }
        });
    }

    /**
     * like post
     * @param postID 
     * @param userID 
     */
    async likePost(postID: ObjectId, userID: string) {
        await this.postModel.findByIdAndUpdate(postID, {
            $push: {
                likes: userID
            }
        })
    }

    /**
     * get single post by id
     * userIDs are changed appropriate user
     * @param id 
     * @returns 
     */
    async getPostByID(id: ObjectId): Promise<Post> {
        const post = await this.postModel.findById(id)
            .populate('userID', 'username')
            .populate('likes', 'username')
            .populate('comments.userID', 'username');
        return post;
    }

    async getPostsByFollowing(followings: ObjectId[]) {
        const posts = await this.postModel.find({ userID: { $in: followings } });
        console.log(posts);

        return posts;
    }
}