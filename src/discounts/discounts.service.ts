import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateDiscountDto } from "./dto/create-discount.dto";
import { UpdateDiscountDto } from "./dto/update-discount.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Discount } from "./models/discount.model";

@Injectable()
export class DiscountsService {
  constructor(
    @InjectModel(Discount) private readonly discountModel: typeof Discount
  ) {}

  async create(createDiscountDto: CreateDiscountDto) {
    const discount = await this.discountModel.create(createDiscountDto);
    return discount;
  }

  async findAll() {
    return await this.discountModel.findAll();
  }

  async findOne(id: number) {
    const discount = await this.discountModel.findByPk(id);
    if (!discount) {
      throw new NotFoundException(`Discount with ID ${id} not found`);
    }
    return discount;
  }

  async update(id: number, updateDiscountDto: UpdateDiscountDto) {
    const discount = await this.findOne(id);
    return await discount.update(updateDiscountDto);
  }

  async remove(id: number) {
    const discount = await this.findOne(id);
    await discount.destroy();
    return { message: `Discount #${id} has been removed` };
  }
}
