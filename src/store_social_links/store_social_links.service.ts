import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { StoreSocialLink } from "./models/store_social_link.model";
import { CreateStoreSocialLinkDto } from "./dto/create-store_social_link.dto";
import { UpdateStoreSocialLinkDto } from "./dto/update-store_social_link.dto";

@Injectable()
export class StoreSocialLinksService {
  constructor(
    @InjectModel(StoreSocialLink)
    private readonly linkModel: typeof StoreSocialLink
  ) {}

  async create(createDto: CreateStoreSocialLinkDto) {
    return await this.linkModel.create(createDto);
  }

  async findAll() {
    return await this.linkModel.findAll();
  }

  async findOne(id: number) {
    const link = await this.linkModel.findByPk(id);
    if (!link) {
      throw new NotFoundException(`Link with ID ${id} not found`);
    }
    return link;
  }

  async update(id: number, updateDto: UpdateStoreSocialLinkDto) {
    const link = await this.findOne(id);
    return await link.update(updateDto);
  }

  async remove(id: number) {
    const link = await this.findOne(id);
    await link.destroy();
    return { message: `Social link #${id} removed` };
  }
}
