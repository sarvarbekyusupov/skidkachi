import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface IFavouritesCreationAttr {
  user_id: number;
  discount_id: number;
}

@Table({ tableName: "favourites", timestamps: false })
export class Favourites extends Model<Favourites, IFavouritesCreationAttr> {
  @ApiProperty({ example: 1, description: "Foydalanuvchi ID raqami" })
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    primaryKey: true,
  })
  declare user_id: number;

  @ApiProperty({ example: 10, description: "Chegirma (discount) ID raqami" })
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    primaryKey: true,
  })
  declare discount_id: number;
}
