import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IDistrictCreationAttr {
  name: string;
  region_id: number;
}

@Table({ tableName: "district" })
export class District extends Model<District, IDistrictCreationAttr> {
  @ApiProperty({ example: 1, description: "Tuman ID raqami" })
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({ example: "Chilonzor", description: "Tuman nomi" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @ApiProperty({ example: 5, description: "Region (viloyat) ID raqami" })
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  declare region_id: number;
}
