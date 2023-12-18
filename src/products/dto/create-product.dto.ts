import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsArray, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsString()
  readonly brand: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly inStock: boolean;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly sizeAvailable: string[];

  @IsString()
  @IsOptional()
  readonly image: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly reviews: string[];

  @IsNotEmpty()
  @IsString()
  readonly Category: string;
}
