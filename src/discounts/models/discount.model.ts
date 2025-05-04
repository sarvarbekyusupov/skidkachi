import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

interface IDiscountCreationAttr {
  store_id: number;
  title: string;
  description?: string;
  discount_percent?: number;
  start_date: Date;
  end_date: Date;
  category_id: number;
  discount_value?: number;
  special_link?: string;
  is_active?: boolean;
  type_id: number;
}

@Table({ tableName: "discounts" })
export class Discount extends Model<Discount, IDiscountCreationAttr> {
  @ApiProperty({ example: 1, description: "Chegirma ID raqami" })
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({ example: 5, description: "Do‘kon ID raqami" })
  @Column({ type: DataType.BIGINT, allowNull: false })
  declare store_id: number;

  @ApiProperty({
    example: "Yozgi chegirmalar",
    description: "Chegirma sarlavhasi",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  declare title: string;

  @ApiProperty({
    example: "Hamma mahsulotlarga 20% chegirma",
    description: "Chegirma tavsifi",
  })
  @Column({ type: DataType.TEXT, allowNull: true })
  declare description?: string;

  @ApiProperty({ example: 20, description: "Chegirma foizi" })
  @Column({ type: DataType.DECIMAL, allowNull: true })
  declare discount_percent?: number;

  @ApiProperty({
    example: "2025-06-01",
    description: "Chegirma boshlanish sanasi",
  })
  @Column({ type: DataType.DATE, allowNull: false })
  declare start_date: Date;

  @ApiProperty({ example: "2025-06-30", description: "Chegirma tugash sanasi" })
  @Column({ type: DataType.DATE, allowNull: false })
  declare end_date: Date;

  @ApiProperty({ example: 2, description: "Kategoriya IDsi" })
//   @ForeignKey(() => Category)
  @Column({ type: DataType.BIGINT, allowNull: false })
  declare category_id: number;

  @ApiProperty({ example: 50000, description: "Pul shaklida chegirma" })
  @Column({ type: DataType.DECIMAL, allowNull: true })
  declare discount_value?: number;

  @ApiProperty({
    example: "https://promo.example.com",
    description: "Maxsus chegirma havolasi",
  })
  @Column({ type: DataType.STRING, allowNull: true })
  declare special_link?: string;

  @ApiProperty({
    example: true,
    description: "Chegirma holati (faol yoki yo‘q)",
  })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare is_active: boolean;

  @ApiProperty({ example: 1, description: "Chegirma turi IDsi" })
  @Column({ type: DataType.BIGINT, allowNull: false })
  declare type_id: number;

  // Optional: Add relations if you have Store, Category, or DiscountType models
  // @BelongsTo(() => Category)
  // declare category: Category;
}
