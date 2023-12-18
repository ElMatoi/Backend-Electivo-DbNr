"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateProductDto = void 0;
var class_validator_1 = require("class-validator");
var CreateProductDto = /** @class */ (function () {
    function CreateProductDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], CreateProductDto.prototype, "name");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], CreateProductDto.prototype, "description");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber()
    ], CreateProductDto.prototype, "price");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], CreateProductDto.prototype, "brand");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsBoolean()
    ], CreateProductDto.prototype, "inStock");
    __decorate([
        class_validator_1.IsArray(),
        class_validator_1.IsString({ each: true }),
        class_validator_1.IsOptional()
    ], CreateProductDto.prototype, "sizeAvailable");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], CreateProductDto.prototype, "image");
    __decorate([
        class_validator_1.IsArray(),
        class_validator_1.IsString({ each: true }),
        class_validator_1.IsOptional()
    ], CreateProductDto.prototype, "reviews");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString()
    ], CreateProductDto.prototype, "Category");
    return CreateProductDto;
}());
exports.CreateProductDto = CreateProductDto;
