import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IUsersCreationAttr {
  name: string;
  phone: string;
  email: string;
  hashed_password: string;
  location: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, IUsersCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Foydalanuvchi unikal ID raqami",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "user_name",
    description: "Foydalanuvchining ismi",
  })
  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @ApiProperty({
    example: "991234567",
    description: "Foydalanuvchining telefon raqami",
  })
  @Column({
    type: DataType.STRING(15),
    // unique: true,
    allowNull: false,
  })
  declare phone: string;

  @ApiProperty({
    example: "user@gmail.com",
    description: "Foydalanuvchining emaili",
  })
  @Column({
    type: DataType.STRING,
    // unique: true,
    allowNull: false,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  declare hashed_password: string;

  @Column({
    type: DataType.STRING,
  })
  declare hashed_ref_token: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_active: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_owner: boolean;

  @Column({
    type: DataType.STRING,
  })
  declare location: string;

  @Column({
    type: DataType.UUID,
    defaultValue:DataType.UUIDV4
  })
  declare activation_link: string;
}
