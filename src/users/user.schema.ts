import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId, SchemaTypes } from "mongoose";

export type userDocument = User & Document;

@Schema()
export class User {
    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop({ type: [SchemaTypes.ObjectId], ref: 'User' })
    followings: ObjectId[];

    @Prop()
    hash: string;
}

export const UserSchema = SchemaFactory.createForClass(User);