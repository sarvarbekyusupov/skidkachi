import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IStoreSocialLinkCreationAttr {
  url: string;
  description?: string;
  store_id: number;
  social_media_type_id: number;
}

@Table({ tableName: "store_social_links" })
export class StoreSocialLink extends Model<
  StoreSocialLink,
  IStoreSocialLinkCreationAttr
> {
  @ApiProperty({ example: 1, description: "Ijtimoiy tarmoq havola ID raqami" })
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "https://facebook.com/mystore",
    description: "Havola URL manzili",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare url: string;

  @ApiProperty({
    example: "Facebook sahifamiz",
    description: "Havola haqida izoh",
  })
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare description: string;

  @ApiProperty({ example: 10, description: "Store ID raqami" })
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  declare store_id: number;

  @ApiProperty({ example: 2, description: "Ijtimoiy tarmoq turi ID raqami" })
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  declare social_media_type_id: number;
}
