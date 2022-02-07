import { Body, Controller, Get, Param, Post, Req, Request, UseGuards } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AddCommentDto } from './dto/add-comment.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { LikePostDto } from './dto/like-post.dto';
import { PostsService } from './posts.service';

@UseGuards(JwtAuthGuard)
@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Post()
    createPost(@Body() createPostDto: CreatePostDto, @Req() req) {
        return this.postsService.createPost(req.user.userId, createPostDto);
    }

    @Post('comment')
    addComment(@Body() addCommentDto: AddCommentDto, @Req() req) {
        this.postsService.addComment(req.user.userId, addCommentDto);
    }

    @Post('like')
    likePost(@Body() likePostDto: LikePostDto, @Req() req) {
        this.postsService.likePost(likePostDto, req.user.userID);
    }

    @Get(':id')
    getPostByID(@Param('id') id: ObjectId) {
        return this.postsService.getPostByID(id);
    }

    @Get('all/get')
    getPostsByFollowing(@Request() req) {
        const id = req.user.userId;
        return this.postsService.getPostsByFollowing(id);
    }
}
