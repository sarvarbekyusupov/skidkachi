import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface StoreCreationAttr {
  name: string;
  location: string;
  phone: string;
  owner_id: number;
  description: string;
  region_id: number;
  district_id: number;
  address: string;
  status_id: number;
  open_time: string;
  close_time: string;
  weekday: number;
}

@Table({ tableName: "store" })
export class Store extends Model<Store, StoreCreationAttr> {
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
  @Column(DataType.STRING)
  declare location: string;

  @ApiProperty()
  @Column(DataType.STRING)
  declare phone: string;

  @ApiProperty()
  @Column(DataType.BIGINT)
  declare owner_id: number;

  @ApiProperty()
  @Column(DataType.TEXT)
  declare description: string;

  @ApiProperty()
  @Column(DataType.BIGINT)
  declare region_id: number;

  @ApiProperty()
  @Column(DataType.BIGINT)
  declare district_id: number;

  @ApiProperty()
  @Column(DataType.TEXT)
  declare address: string;

  @ApiProperty()
  @Column(DataType.BIGINT)
  declare status_id: number;

  @ApiProperty()
  @Column(DataType.TIME)
  declare open_time: string;

  @ApiProperty()
  @Column(DataType.TIME)
  declare close_time: string;

  @ApiProperty()
  @Column(DataType.TINYINT)
  declare weekday: number;
}
