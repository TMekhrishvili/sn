import { ObjectId } from "mongoose";

export class AddCommentDto {
    postID: ObjectId;
    comment: string;
}