import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { AddCommentDto } from './dto/add-comment.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { LikePostDto } from './dto/like-post.dto';
import { Post } from './post.schema';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
    constructor(
        private readonly postsRepository: PostsRepository,
        private readonly usersService: UsersService
    ) { }

    async createPost(id: string, createPostDto: CreatePostDto): Promise<Post> {
        const { content } = createPostDto;
        return await this.postsRepository.createPost(id, content);
    }

    async addComment(userID: string, addCommentDto: AddCommentDto): Promise<void> {
        const { postID, comment } = addCommentDto;
        await this.postsRepository.addComment(postID, userID, comment);
    }

    async likePost(likePostDto: LikePostDto, userID: string): Promise<void> {
        const { postID } = likePostDto;
        await this.postsRepository.likePost(postID, userID);
    }

    async getPostByID(id: ObjectId): Promise<Post> {
        return await this.postsRepository.getPostByID(id);
    }

    async getPostsByFollowing(userID: ObjectId) {
        const user = await this.usersService.findById(userID)
        return this.postsRepository.getPostsByFollowing(user.followings);
    }
}
