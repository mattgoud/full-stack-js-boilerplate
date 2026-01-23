import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Email invalide' })
  email!: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password!: string;
}

export class UserDto {
  @IsString()
  id!: string;

  @IsEmail()
  email!: string;

  @IsString()
  username!: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  githubId?: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @IsString()
  createdAt!: string;

  @IsString()
  updatedAt!: string;
}
