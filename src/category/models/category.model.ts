import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

interface ICategoryCreationAttr {
  name: string;
  description?: string;
  parent_id?: number;
}

@Table({ tableName: "category" })
export class Category extends Model<Category, ICategoryCreationAttr> {
  @ApiProperty({ example: 1, description: "Kategoriya ID raqami" })
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({ example: "Elektronika", description: "Kategoriya nomi" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @ApiProperty({
    example: "Gadjetlar va qurilmalar",
    description: "Kategoriya tavsifi",
  })
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare description?: string;

  @ApiProperty({
    example: 0,
    description: "Yuqori kategoriya IDsi (agar mavjud bo‘lsa)",
  })
  @ForeignKey(() => Category)
  @Column({
    type: DataType.BIGINT,
    allowNull: true,
  })
  declare parent_id?: number;

  @BelongsTo(() => Category, "parent_id")
  declare parent?: Category;
}
