import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { District } from "./models/district.model";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District)
    private readonly districtModel: typeof District
  ) {}

  async create(createDto: CreateDistrictDto) {
    return await this.districtModel.create(createDto);
  }

  async findAll() {
    return await this.districtModel.findAll();
  }

  async findOne(id: number) {
    const district = await this.districtModel.findByPk(id);
    if (!district) throw new NotFoundException(`District #${id} not found`);
    return district;
  }

  async update(id: number, updateDto: UpdateDistrictDto) {
    const district = await this.findOne(id);
    return await district.update(updateDto);
  }

  async remove(id: number) {
    const district = await this.findOne(id);
    await district.destroy();
    return { message: `District #${id} deleted` };
  }
}
