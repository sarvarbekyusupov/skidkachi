import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Type } from "./models/type.model";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";

@Injectable()
export class TypeService {
  constructor(
    @InjectModel(Type)
    private readonly typeModel: typeof Type
  ) {}

  async create(createDto: CreateTypeDto) {
    return await this.typeModel.create(createDto);
  }

  async findAll() {
    return await this.typeModel.findAll();
  }

  async findOne(id: number) {
    const type = await this.typeModel.findByPk(id);
    if (!type) {
      throw new NotFoundException(`Type with ID ${id} not found`);
    }
    return type;
  }

  async update(id: number, updateDto: UpdateTypeDto) {
    const type = await this.findOne(id);
    return await type.update(updateDto);
  }

  async remove(id: number) {
    const type = await this.findOne(id);
    await type.destroy();
    return { message: `Type #${id} deleted` };
  }
}
