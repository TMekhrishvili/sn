import { ObjectId } from "mongoose";

export class LikePostDto {
    postID: ObjectId;
    userID: ObjectId;
}