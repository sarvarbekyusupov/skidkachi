import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Store } from "./models/store.model";
import { CreateStoreDto } from "./dto/create-store.dto";

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(Store)
    private storeRepository: typeof Store
  ) {}

  async create(dto: CreateStoreDto) {
    return this.storeRepository.create(dto);
  }

  async findAll() {
    return this.storeRepository.findAll();
  }

  async findOne(id: number) {
    return this.storeRepository.findByPk(id);
  }

  async update(id: number, dto: Partial<CreateStoreDto>) {
    await this.storeRepository.update(dto, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number) {
    return this.storeRepository.destroy({ where: { id } });
  }
}
