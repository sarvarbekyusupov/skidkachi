import {
  IsString,
  IsEmail,
  MinLength,
  Matches,
  IsNotEmpty,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "John Doe", description: "Full name of the user" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "+1234567890",
    description: "Phone number of the user",
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: "john@example.com",
    description: "Email address of the user",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: "StrongP@ssw0rd",
    description: "Password of the user (min 6 chars)",
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: "StrongP@ssw0rd", description: "Confirm password" })
  @IsString()
  @MinLength(6)
  confirm_password: string;

  @ApiProperty({ example: "New York, USA", description: "User location" })
  @IsString()
  @IsNotEmpty()
  location: string;
}
