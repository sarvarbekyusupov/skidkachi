import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { SocialMediaType } from "./models/social_media_type.entity";
import { CreateSocialMediaTypeDto } from "./dto/create-social_media_type.dto";
import { UpdateSocialMediaTypeDto } from "./dto/update-social_media_type.dto";

@Injectable()
export class SocialMediaTypeService {
  constructor(
    @InjectModel(SocialMediaType)
    private readonly socialMediaTypeModel: typeof SocialMediaType
  ) {}

  async create(createDto: CreateSocialMediaTypeDto) {
    return await this.socialMediaTypeModel.create(createDto);
  }

  async findAll() {
    return await this.socialMediaTypeModel.findAll();
  }

  async findOne(id: number) {
    const type = await this.socialMediaTypeModel.findByPk(id);
    if (!type) {
      throw new NotFoundException(`Social media type with ID ${id} not found`);
    }
    return type;
  }

  async update(id: number, updateDto: UpdateSocialMediaTypeDto) {
    const type = await this.findOne(id);
    return await type.update(updateDto);
  }

  async remove(id: number) {
    const type = await this.findOne(id);
    await type.destroy();
    return { message: `Social media type #${id} removed` };
  }
}
