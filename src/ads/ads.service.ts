import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Ads } from "./models/ad.model";
import { CreateAdsDto } from "./dto/create-ad.dto";
import { UpdateAdsDto } from "./dto/update-ad.dto";

@Injectable()
export class AdsService {
  constructor(
    @InjectModel(Ads)
    private readonly adsModel: typeof Ads
  ) {}

  async create(createDto: CreateAdsDto) {
    return await this.adsModel.create(createDto);
  }

  async findAll() {
    return await this.adsModel.findAll();
  }

  async findOne(id: number) {
    const ad = await this.adsModel.findByPk(id);
    if (!ad) {
      throw new NotFoundException(`Ad with ID ${id} not found`);
    }
    return ad;
  }

  async update(id: number, updateDto: UpdateAdsDto) {
    const ad = await this.findOne(id);
    return await ad.update(updateDto);
  }

  async remove(id: number) {
    const ad = await this.findOne(id);
    await ad.destroy();
    return { message: `Ad #${id} deleted` };
  }
}
