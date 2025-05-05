import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Status } from "./models/status.model";
import { CreateStatusDto } from "./dto/create-status.dto";

@Injectable()
export class StatusService {
  constructor(
    @InjectModel(Status)
    private statusRepository: typeof Status
  ) {}

  async create(dto: CreateStatusDto) {
    return this.statusRepository.create(dto);
  }

  async findAll() {
    return this.statusRepository.findAll();
  }

  async findOne(id: number) {
    return this.statusRepository.findByPk(id);
  }

  async update(id: number, dto: Partial<CreateStatusDto>) {
    await this.statusRepository.update(dto, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number) {
    return this.statusRepository.destroy({ where: { id } });
  }
}
