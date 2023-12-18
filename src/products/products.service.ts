import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './interface/product.interface';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return await createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    return await this.productModel.findById(id).exec();
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return await this.productModel.findByIdAndDelete(id).exec();
  }
    async deleteAll(): Promise<any> {
    return await this.productModel.deleteMany({}).exec();
  }
  async findAllIdAndCategory(): Promise<any[]> {
    return this.productModel.find({}, 'Category').exec(); 
  }
  
  
}
