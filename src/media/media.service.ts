import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Media } from './models/media.model';
import { CreateMediaDto } from './dto/create-media.dto';

@Injectable()
export class MediaService {
  constructor(
    @InjectModel(Media)
    private readonly mediaModel: typeof Media,
  ) {}

  async create(createMediaDto: CreateMediaDto) {
    return await this.mediaModel.create(createMediaDto);
  }

  async findAll() {
    return await this.mediaModel.findAll();
  }

  async findByTable(table_name: string, table_id: number) {
    return await this.mediaModel.findAll({ where: { table_name, table_id } });
  }

  async remove(id: number) {
    return await this.mediaModel.destroy({ where: { id } });
  }
}
