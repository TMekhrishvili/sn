import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId, SchemaTypes } from "mongoose";

export type PostDocument = Post & Document;

export class Comment {
    @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
    userID: ObjectId;

    @Prop()
    comment: string;

    @Prop({ type: Date, default: Date.now })
    createAt: Date;
}

@Schema()
export class Post {
    @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
    userID: ObjectId;

    @Prop()
    content: string;

    @Prop()
    comments: Comment[];

    @Prop({ type: [SchemaTypes.ObjectId], ref: 'User' })
    likes: ObjectId[];

    @Prop({ type: Date, default: Date.now })
    createAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);