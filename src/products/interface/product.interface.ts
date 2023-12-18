import { Document } from 'mongoose';

export interface Product extends Document {
    name: string;
    price: number;
    description: string;
    // Add other product properties here
  }