"use strict";
exports.__esModule = true;
exports.ProductSchema = void 0;
var mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    inStock: { type: Boolean, required: true },
    sizeAvailable: [{ type: String }],
    image: { type: String },
    reviews: [{ type: String }],
    Category: { type: String, required: true }
});
