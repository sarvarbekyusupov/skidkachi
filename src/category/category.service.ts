import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { Category } from "./models/category.model";

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category)
    private readonly categoryModel: typeof Category
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return this.categoryModel.create(createCategoryDto);
  }

  async findAll() {
    return this.categoryModel.findAll();
  }

  async findOne(id: number) {
    const category = await this.categoryModel.findByPk(id);
    if (!category) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const [affectedCount, affectedRows] = await this.categoryModel.update(
      updateCategoryDto,
      {
        where: { id },
        returning: true,
      }
    );

    if (affectedCount === 0) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }

    return affectedRows[0];
  }

  async remove(id: number) {
    const deletedCount = await this.categoryModel.destroy({ where: { id } });

    if (deletedCount === 0) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }

    return { message: "Category deleted successfully" };
  }
}
