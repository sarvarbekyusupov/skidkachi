import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ITypeCreationAttr {
  name: string;
  description?: string;
}

@Table({ tableName: "type" })
export class Type extends Model<Type, ITypeCreationAttr> {
  @ApiProperty({ example: 1, description: "Tur ID raqami" })
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({ example: "Elektronika", description: "Turi nomi" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @ApiProperty({
    example: "Elektron mahsulotlar uchun toifa",
    description: "Izoh",
  })
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare description: string;
}
