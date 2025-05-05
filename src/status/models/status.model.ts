import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface StatusCreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: "status" })
export class Status extends Model<Status, StatusCreationAttr> {
  @ApiProperty()
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @ApiProperty()
  @Column(DataType.TEXT)
  declare description: string;
}
