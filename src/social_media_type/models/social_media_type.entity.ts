import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ISocialMediaTypeCreationAttr {
  based_url: string;
  is_active?: boolean;
}

@Table({ tableName: "social_media_type" })
export class SocialMediaType extends Model<
  SocialMediaType,
  ISocialMediaTypeCreationAttr
> {
  @ApiProperty({ example: 1, description: "Ijtimoiy tarmoq turi ID raqami" })
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "https://facebook.com",
    description: "Ijtimoiy tarmoq bazaviy havolasi",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare based_url: string;

  @ApiProperty({ example: true, description: "Faollik holati" })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare is_active: boolean;
}
