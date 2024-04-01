import {BadRequestException, Injectable} from '@nestjs/common';
import {CertainNumDTO, CreatorIdDTO, DataPostDTO, FiltersDTO, PostIdDTO, UpdatePostDTO} from "./dto";
import {InjectModel} from "@nestjs/sequelize";
import {Post} from "./models/post.model";
import {PostResponce} from "./responce";
import {AppError} from "../../common/constants/error";

@Injectable()
export class PostService {
    constructor(@InjectModel(Post) private readonly postRepository: typeof Post) {}

    async createPost(userId: number, dto: DataPostDTO) : Promise<PostResponce> {
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

    async updatePost(dto: UpdatePostDTO) : Promise<PostResponce>{
        const id = dto.postId;
        await this.postRepository.update(dto, {where: {id}});
        return this.postRepository.findOne({where: {id}});
    }

    async deletePost(dto: PostIdDTO) : Promise<boolean>{
        const id = dto.postId;
        const postExist = await this.getPostById(dto);

        if(postExist) {
            await this.postRepository.destroy({where: {id}});
            return true;
        }
    }

    async getPostById(dto: PostIdDTO): Promise<PostResponce>{
        const id = dto.postId;
        const postExist = await this.postRepository.findByPk(id);
        if(!postExist) throw new BadRequestException(AppError.POST_ID_NOT_EXIST);
        return postExist;
    }

    async getAllPostFromUserId(dto: CreatorIdDTO): Promise<PostResponce[]> {
        const creatorId = dto.creatorId;

        const postExist = await this.postRepository.findAll({where: {creatorId}});
        if(postExist.length <= 0) throw new BadRequestException(AppError.USER_DONT_HAVE_POSTS);
        return postExist;
    }

    async getCertainNumPosts(dto: CertainNumDTO): Promise<PostResponce[]> {
        const { count, rows } = await this.postRepository.findAndCountAll({
            offset: +dto.offset,
            limit: +dto.limit
        });

        if(count <= 0) throw new BadRequestException(AppError.DONT_HAVE_POSTS);
        return rows;
    }
}
