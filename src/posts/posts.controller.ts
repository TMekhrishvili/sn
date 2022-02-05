import { Body, Controller, Post } from '@nestjs/common';
import { AddCommentDto } from './dto/add-comment.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Post()
    createPost(@Body() createPostDto: CreatePostDto) {
        return this.postsService.createPost(createPostDto);
    }

    @Post('add/comment')
    addComment(@Body() addCommentDto: AddCommentDto) {
        this.postsService.addComment(addCommentDto);
    }
}
