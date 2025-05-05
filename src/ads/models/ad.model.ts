import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IAdsCreationAttr {
  title: string;
  description?: string;
  start_date: Date;
  end_date: Date;
  target_url: string;
  placement: string;
  status: "active" | "inactive" | "expired"; // customize enum as needed
  view_count?: number;
}

@Table({ tableName: "ads" })
export class Ads extends Model<Ads, IAdsCreationAttr> {
  @ApiProperty({ example: 1, description: "Reklama ID raqami" })
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  declare id: number;

  @ApiProperty({
    example: "Yozgi chegirmalar",
    description: "Reklama sarlavhasi",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  declare title: string;

  @ApiProperty({
    example: "Yozgi mahsulotlarga 50% chegirma",
    description: "Reklama tavsifi",
  })
  @Column({ type: DataType.TEXT })
  declare description: string;

  @ApiProperty({ example: "2025-06-01", description: "Boshlanish sanasi" })
  @Column({ type: DataType.DATE, allowNull: false })
  declare start_date: Date;

  @ApiProperty({ example: "2025-06-30", description: "Tugash sanasi" })
  @Column({ type: DataType.DATE, allowNull: false })
  declare end_date: Date;

  @ApiProperty({
    example: "https://example.com/ads",
    description: "Reklama URL manzili",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  declare target_url: string;

  @ApiProperty({ example: "homepage-banner", description: "Reklama joyi" })
  @Column({ type: DataType.STRING, allowNull: false })
  declare placement: string;

  @ApiProperty({ example: "active", description: "Reklama holati" })
  @Column({
    type: DataType.ENUM("active", "inactive", "expired"),
    allowNull: false,
  })
  declare status: "active" | "inactive" | "expired";

  @ApiProperty({ example: 1250, description: "Nechta marta ko‘rilgan" })
  @Column({ type: DataType.BIGINT, defaultValue: 0 })
  declare view_count: number;
}
