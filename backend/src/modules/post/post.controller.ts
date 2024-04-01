import {Body, Controller, Delete, Patch, Post, Req, UseGuards} from '@nestjs/common';
import {PostService} from "./post.service";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {JwtAusGuard} from "../../security/guards/jwtGuard";
import {CreatePostDTO, DeletePostDTO, UpdatePostDTO} from "./dto";
import {PostResponce} from "./responce";

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @ApiTags('API-post')
    @ApiResponse({status: 201})
    @UseGuards(JwtAusGuard)
    @Post('create')
    createPost(@Body() dto: CreatePostDTO, @Req() request): Promise<PostResponce> {
        const user = request.user;
        return this.postService.createPost(user.id, dto);
    }

    @ApiTags('API-post')
    @ApiResponse({status: 200, type: CreatePostDTO})
    @UseGuards(JwtAusGuard)
    @Patch('update')
    updatePost(@Body() dto: UpdatePostDTO): Promise<CreatePostDTO> {
        return this.postService.updatePost(dto);
    }

    @ApiTags('API-post')
    @ApiResponse({status: 200})
    @UseGuards(JwtAusGuard)
    @Delete('delete')
    deletePost(@Body() dto: DeletePostDTO): Promise<boolean> {
        return this.postService.deletePost(dto);
    }
}
