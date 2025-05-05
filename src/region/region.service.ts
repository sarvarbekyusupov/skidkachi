import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Region } from "./models/region.model";
import { CreateRegionDto } from "./dto/create-region.dto";

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region)
    private regionRepository: typeof Region
  ) {}

  async create(dto: CreateRegionDto) {
    return this.regionRepository.create(dto);
  }

  async findAll() {
    return this.regionRepository.findAll();
  }

  async findOne(id: number) {
    return this.regionRepository.findByPk(id);
  }

  async remove(id: number) {
    return this.regionRepository.destroy({ where: { id } });
  }
}
