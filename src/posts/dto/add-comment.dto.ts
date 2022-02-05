import { ObjectId } from "mongoose";

export class AddCommentDto {
    postID: ObjectId;
    userID: ObjectId;
    comment: string;
}