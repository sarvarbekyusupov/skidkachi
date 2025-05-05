import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Review } from "./models/review.model";
import { CreateReviewDto } from "./dto/create-review.dto";

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review)
    private reviewRepository: typeof Review
  ) {}

  async create(dto: CreateReviewDto) {
    return this.reviewRepository.create(dto);
  }

  async findAll() {
    return this.reviewRepository.findAll();
  }

  async findOne(id: number) {
    return this.reviewRepository.findByPk(id);
  }

  async update(id: number, dto: Partial<CreateReviewDto>) {
    await this.reviewRepository.update(dto, { where: { id } });
    return this.findOne(id);
  }

  async remove(id: number) {
    return this.reviewRepository.destroy({ where: { id } });
  }
}
