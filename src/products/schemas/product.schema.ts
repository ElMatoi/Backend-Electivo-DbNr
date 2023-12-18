import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  inStock: { type: Boolean, required: true },
  sizeAvailable: [{ type: String }],
  image: { type: String },
  reviews: [{ type: String }],
  Category: { type: String, required: true },
});
