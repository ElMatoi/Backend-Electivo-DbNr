import { Body, Controller, Delete, Get, Param, Post, Put,  } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './interface/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('createProduct')
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Get('showAllProducts')
  async findAll() {
    return this.productsService.findAll();
  }
  @Get('showIdAndCategory')
async findAllIdAndCategory() {
  return this.productsService.findAllIdAndCategory();
}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productsService.delete(id);
  }
  @Delete()
  async deleteAll(): Promise<any> {
    return this.productsService.deleteAll();
  }

}
