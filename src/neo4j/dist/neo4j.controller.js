"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Neo4jController = void 0;
var common_1 = require("@nestjs/common");
var Neo4jController = /** @class */ (function () {
    function Neo4jController(neo4jService) {
        this.neo4jService = neo4jService;
    }
    Neo4jController.prototype.createUser = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.neo4jService.createUser(body.userId, body.userName)];
            });
        });
    };
    Neo4jController.prototype.createProduct = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.neo4jService.createProduct(body.productId, body.productName, body.description, body.price, body.brand, body.inStock, body.sizeAvailable, body.image, body.reviews, body.category)];
            });
        });
    };
    Neo4jController.prototype.recordClick = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.neo4jService.recordClick(body.userId, body.productId)];
            });
        });
    };
    Neo4jController.prototype.recommendProducts = function (userId) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.neo4jService.recommendProducts(userId)];
            });
        });
    };
    Neo4jController.prototype.recommendLaptopFurnitures = function (userId) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.neo4jService.recommendLaptopFurnitures(userId)];
            });
        });
    };
    Neo4jController.prototype.asyncrecommendProductsClothes = function (userId) {
        return this.neo4jService.recommendClothesProducts(userId);
    };
    Neo4jController.prototype.asynrecommendElectronicsProducts = function (userId) {
        return this.neo4jService.recommendElectronicsProducts(userId);
    };
    Neo4jController.prototype.asynrecommendFurnitureProducts = function (userId) {
        return this.neo4jService.recommendFurnitureProducts(userId);
    };
    __decorate([
        common_1.Post('createUser'),
        __param(0, common_1.Body())
    ], Neo4jController.prototype, "createUser");
    __decorate([
        common_1.Post('createProduct'),
        __param(0, common_1.Body())
    ], Neo4jController.prototype, "createProduct");
    __decorate([
        common_1.Post('recordClick'),
        __param(0, common_1.Body())
    ], Neo4jController.prototype, "recordClick");
    __decorate([
        common_1.Post('recommendProducts'),
        __param(0, common_1.Body('userId'))
    ], Neo4jController.prototype, "recommendProducts");
    __decorate([
        common_1.Post('recommendLaptopFurnitures'),
        __param(0, common_1.Body('userId'))
    ], Neo4jController.prototype, "recommendLaptopFurnitures");
    __decorate([
        common_1.Post('recommendProductsClothes'),
        __param(0, common_1.Body('userId'))
    ], Neo4jController.prototype, "asyncrecommendProductsClothes");
    __decorate([
        common_1.Post('recommendElectronicsProducts'),
        __param(0, common_1.Body('userId'))
    ], Neo4jController.prototype, "asynrecommendElectronicsProducts");
    __decorate([
        common_1.Post('recommendFurnitureProducts'),
        __param(0, common_1.Body('userId'))
    ], Neo4jController.prototype, "asynrecommendFurnitureProducts");
    Neo4jController = __decorate([
        common_1.Controller('neo4j')
    ], Neo4jController);
    return Neo4jController;
}());
exports.Neo4jController = Neo4jController;
