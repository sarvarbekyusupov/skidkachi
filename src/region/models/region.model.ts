import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface RegionCreationAttr {
  name: string;
}

@Table({ tableName: "region" })
export class Region extends Model<Region, RegionCreationAttr> {
  @ApiProperty({ example: 1, description: "Region ID" })
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({ example: "Tashkent", description: "Region name" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;
}
