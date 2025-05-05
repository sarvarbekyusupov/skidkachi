import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface IMediaCreationAttr {
  name: string;
  file: string;
  table_name: string;
  table_id: number;
}

@Table({ tableName: "media" })
export class Media extends Model<Media, IMediaCreationAttr> {
  @ApiProperty({ example: 1, description: "Media ID raqami" })
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({ example: "Banner", description: "Fayl nomi" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @ApiProperty({ example: "banner.jpg", description: "Fayl yo‘li" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare file: string;

  @ApiProperty({ example: "ads", description: "Bog‘langan jadval nomi" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare table_name: string;

  @ApiProperty({ example: 1, description: "Bog‘langan jadval ID raqami" })
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  declare table_id: number;
}
