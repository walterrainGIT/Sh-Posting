import {Body, Controller, Delete, Get, Patch, Post, Req, UseGuards} from '@nestjs/common';
import {PostService} from "./post.service";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {JwtAusGuard} from "../../security/guards/jwtGuard";
import {CertainNumDTO, CreatorIdDTO, DataPostDTO, FiltersDTO, PostIdDTO, UpdatePostDTO} from "./dto";
import {PostResponce} from "./responce";
import {UpdateUserDTO} from "../user/dto";

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @ApiTags('API-post')
    @ApiResponse({status: 201, type: PostResponce})
    @UseGuards(JwtAusGuard)
    @Post('create')
    createPost(@Req() request, @Body() dto: DataPostDTO): Promise<PostResponce> {
        const user = request.user;
        return this.postService.createPost(user.id, dto);
    }

    @ApiTags('API-post')
    @ApiResponse({status: 200, type: PostResponce})
    @UseGuards(JwtAusGuard)
    @Patch('update')
    updatePost(@Body() dto: UpdatePostDTO): Promise<PostResponce> {
        return this.postService.updatePost(dto);
    }

    @ApiTags('API-post')
    @ApiResponse({status: 200})
    @UseGuards(JwtAusGuard)
    @Delete('delete')
    deletePost(@Body() dto : PostIdDTO): Promise<boolean> {
        return this.postService.deletePost(dto);
    }

    @ApiTags('API-post')
    @ApiResponse({status: 200, type: PostResponce})
    @UseGuards(JwtAusGuard)
    @Get('getAllPostFromUserId')
    getAllPostFromUserId(@Body() dto : CreatorIdDTO): Promise<PostResponce[]> {
        return this.postService.getAllPostFromUserId(dto);
    }

    @ApiTags('API-post')
    @ApiResponse({status: 200, type: PostResponce})
    @UseGuards(JwtAusGuard)
    @Get('getCertainNumPosts')
    getCertainNumPosts(@Body() dto : CertainNumDTO): Promise<PostResponce[]> {
        return this.postService.getCertainNumPosts(dto);
    }
}
