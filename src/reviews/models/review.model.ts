import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Discount } from "src/discounts/models/discount.model";
import { User } from "src/users/models/user.model";

interface ReviewCreationAttr {
  discount_id: number;
  user_id: number;
  comment: string;
  rating: number;
}

@Table({ tableName: "reviews" })
export class Review extends Model<Review, ReviewCreationAttr> {
  @ApiProperty()
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty()
  @Column({ type: DataType.BIGINT })
  declare discount_id: number;

  @ApiProperty()
  @Column({ type: DataType.BIGINT })
  declare user_id: number;

  @ApiProperty()
  @Column(DataType.TEXT)
  declare comment: string;

  @ApiProperty()
  @Column(DataType.SMALLINT)
  declare rating: number;
}
