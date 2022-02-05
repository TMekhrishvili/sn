import { ObjectId } from "mongoose";

export class CreatePostDto {
    userID: ObjectId;
    content: string;
}