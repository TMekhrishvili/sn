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

    async createPost(createPostDto: CreatePostDto): Promise<Post> {
        const { userID, content } = createPostDto;
        return await this.postsRepository.createPost(userID, content);
    }

    async addComment(addCommentDto: AddCommentDto): Promise<void> {
        const { postID, userID, comment } = addCommentDto;
        await this.postsRepository.addComment(postID, userID, comment);
    }

    async likePost(likePostDto: LikePostDto): Promise<void> {
        const { postID, userID } = likePostDto;
        await this.postsRepository.likePost(postID, userID);
    }

    async getPostByID(id: ObjectId): Promise<Post> {
        return await this.postsRepository.getPostByID(id);
    }

    async getPostsByFollowing() {
        const userID = '' // ეს უნდა ავიღო ავტორიზებული მომხმარებლისგან
        const user = await this.usersService.findById(userID)
        return this.postsRepository.getPostsByFollowing(userID, user.followings);
    }
}
