import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/users/users.module';
import { Post, PostSchema } from './post.schema';
import { PostsController } from './posts.controller';
import { PostsRepository } from './posts.repository';
import { PostsService } from './posts.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]), UsersModule],
  controllers: [PostsController],
  providers: [PostsService, PostsRepository]
})
export class PostsModule { }
