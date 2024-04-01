import {Injectable} from '@nestjs/common';
import {CreatePostDTO, DeletePostDTO, UpdatePostDTO} from "./dto";
import {InjectModel} from "@nestjs/sequelize";
import {Post} from "./models/post.model";
import {PostResponce} from "./responce";

@Injectable()
export class PostService {
    constructor(@InjectModel(Post) private readonly postRepository: typeof Post) {}

    async createPost(userId: number, dto: CreatePostDTO) : Promise<PostResponce> {
        const nowDateTime = new Date().toLocaleDateString("ru-RU");
        const post = {
            creatorId: userId,
            category: dto.category,
            createDateTime: nowDateTime,
            title: dto.title,
            content: dto.content,
        };
        await this.postRepository.create(post);
       return post;
    }

    async updatePost(dto: UpdatePostDTO) : Promise<UpdatePostDTO>{
        const id = dto.postId;
        await this.postRepository.update(dto, {where: {id}});
        return dto;
    }

    async deletePost(dto: DeletePostDTO) : Promise<boolean>{
        const id: number = +dto.postId;
        await this.postRepository.destroy({where: {id}});
        return true;
    }
}
