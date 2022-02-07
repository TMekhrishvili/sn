import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { AddCommentDto } from './dto/add-comment.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { LikePostDto } from './dto/like-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Post()
    createPost(@Body() createPostDto: CreatePostDto) {
        return this.postsService.createPost(createPostDto);
    }

    @Post('comment')
    addComment(@Body() addCommentDto: AddCommentDto) {
        this.postsService.addComment(addCommentDto);
    }

    @Post('like')
    likePost(@Body() likePostDto: LikePostDto) {
        this.postsService.likePost(likePostDto);
    }

    @Get(':id')
    getPostByID(@Param('id') id: ObjectId) {
        return this.postsService.getPostByID(id);
    }

    @Get('all')
    getPostsByFollowing() {
        return this.postsService.getPostsByFollowing();
    }
}
