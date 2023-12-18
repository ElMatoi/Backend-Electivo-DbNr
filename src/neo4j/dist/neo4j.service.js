"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.Neo4jService = void 0;
var common_1 = require("@nestjs/common");
var neo4j = require("neo4j-driver");
var Neo4jService = /** @class */ (function () {
    function Neo4jService() {
        var neo4jUri = 'neo4j+s://ef4a2ed9.databases.neo4j.io';
        var neo4jUser = 'neo4j';
        var neo4jPassword = 'Q5ZCxq4wLbKEa1vycn_v274dUaSvZY98kml-q3oss64';
        this.driver = neo4j.driver(neo4jUri, neo4j.auth.basic(neo4jUser, neo4jPassword));
    }
    Neo4jService.prototype.onModuleInit = function () {
        return __awaiter(this, void 0, Promise, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.testConnection()];
                    case 1:
                        _a.sent();
                        console.log('Neo4j connection successful.');
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error('Error connecting to Neo4j:', error_1);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Neo4jService.prototype.testConnection = function () {
        return __awaiter(this, void 0, Promise, function () {
            var session;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = this.driver.session();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 5]);
                        return [4 /*yield*/, session.run('MATCH (n) RETURN n LIMIT 1')];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, session.close()];
                    case 4:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Neo4jService.prototype.createUser = function (userId, userName) {
        return __awaiter(this, void 0, void 0, function () {
            var session;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = this.driver.session();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 5]);
                        return [4 /*yield*/, session.run("CREATE (u:User {id: $userId, name: $userName})", { userId: userId, userName: userName })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, session.close()];
                    case 4:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Neo4jService.prototype.createProduct = function (productId, productName, description, price, brand, inStock, sizeAvailable, image, reviews, category) {
        return __awaiter(this, void 0, void 0, function () {
            var session;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = this.driver.session();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 5]);
                        return [4 /*yield*/, session.run("\n        CREATE (p:Product {\n          id: $productId, \n          name: $productName, \n          description: $description, \n          price: $price, \n          brand: $brand, \n          inStock: $inStock, \n          sizeAvailable: $sizeAvailable, \n          image: $image, \n          reviews: $reviews, \n          category: $category\n        })", {
                                productId: productId,
                                productName: productName,
                                description: description,
                                price: price,
                                brand: brand,
                                inStock: inStock,
                                sizeAvailable: sizeAvailable,
                                image: image,
                                reviews: reviews,
                                category: category
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, session.close()];
                    case 4:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Neo4jService.prototype.recordClick = function (userId, productId) {
        return __awaiter(this, void 0, void 0, function () {
            var session;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = this.driver.session();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 5]);
                        return [4 /*yield*/, session.run("\n        MATCH (u:User {id: $userId}), (p:Product {id: $productId})\n        CREATE (u)-[:CLICKED_ON]->(p)\n      ", { userId: userId, productId: productId })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, session.close()];
                    case 4:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Neo4jService.prototype.recommendProducts = function (userId) {
        return __awaiter(this, void 0, Promise, function () {
            var session, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("UserID: " + userId);
                        session = this.driver.session();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 5]);
                        return [4 /*yield*/, session.run("\n       \n        MATCH (u:User {id: $userId})-[:CLICKED_ON]->(p:Product)\n        WITH u, COLLECT(DISTINCT p.category) AS clickedCategories\n       \n        MATCH (product:Product)\n        WHERE product.category IN clickedCategories AND NOT EXISTS ((u)-[:CLICKED_ON]->(product))\n        RETURN DISTINCT product\n        \n        \n      ", { userId: userId })];
                    case 2:
                        result = _a.sent();
                        console.log("Recommendations:", result.records.map(function (record) { return record.get('product').properties; }));
                        return [2 /*return*/, result.records.map(function (record) { return record.get('product').properties; })];
                    case 3: return [4 /*yield*/, session.close()];
                    case 4:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Neo4jService.prototype.recommendLaptopFurnitures = function (userId) {
        return __awaiter(this, void 0, Promise, function () {
            var session, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = this.driver.session();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 5]);
                        return [4 /*yield*/, session.run("\n    \n      MATCH (u:User {id: $userId})-[:CLICKED_ON]->(p:Product)\n      WHERE p.category = 'Electronics' AND p.name CONTAINS 'Laptop'\n      WITH u, COUNT(p) > 0 AS clickedLaptop\n\n      \n      MATCH (product:Product)\n      WHERE clickedLaptop AND product.category = 'Furniture'\n      RETURN DISTINCT product\n    ", { userId: userId })];
                    case 2:
                        result = _a.sent();
                        console.log("Recommendations:", result.records.map(function (record) { return record.get('product').properties; }));
                        return [2 /*return*/, result.records.map(function (record) { return record.get('product').properties; })];
                    case 3: return [4 /*yield*/, session.close()];
                    case 4:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Neo4jService.prototype.recommendClothesProducts = function (userId) {
        return __awaiter(this, void 0, Promise, function () {
            var session, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = this.driver.session();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 5]);
                        return [4 /*yield*/, session.run("\n         \n          MATCH (u:User {id: $userId})-[:CLICKED_ON]->(p:Product)\n          WHERE p.category = 'Clothes'\n          WITH u, COUNT(p) > 0 AS clickedClothes\n\n         \n          MATCH (product:Product)\n          WHERE clickedClothes AND product.category = 'Clothes'\n          RETURN DISTINCT product\n      ", { userId: userId })];
                    case 2:
                        result = _a.sent();
                        console.log("Recommendations:", result.records.map(function (record) { return record.get('product').properties; }));
                        return [2 /*return*/, result.records.map(function (record) { return record.get('product').properties; })];
                    case 3: return [4 /*yield*/, session.close()];
                    case 4:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Neo4jService.prototype.recommendElectronicsProducts = function (userId) {
        return __awaiter(this, void 0, Promise, function () {
            var session, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = this.driver.session();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 5]);
                        return [4 /*yield*/, session.run("\n         \n          MATCH (u:User {id: $userId})-[:CLICKED_ON]->(p:Product)\n          WHERE p.category = 'Electronics'\n          WITH u, COUNT(p) > 0 AS clickedElectronics\n\n         \n          MATCH (product:Product)\n          WHERE clickedElectronics AND product.category = 'Electronics'\n          RETURN DISTINCT product\n      ", { userId: userId })];
                    case 2:
                        result = _a.sent();
                        console.log("Recommendations:", result.records.map(function (record) { return record.get('product').properties; }));
                        return [2 /*return*/, result.records.map(function (record) { return record.get('product').properties; })];
                    case 3: return [4 /*yield*/, session.close()];
                    case 4:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Neo4jService.prototype.recommendFurnitureProducts = function (userId) {
        return __awaiter(this, void 0, Promise, function () {
            var session, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = this.driver.session();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 5]);
                        return [4 /*yield*/, session.run("\n         \n          MATCH (u:User {id: $userId})-[:CLICKED_ON]->(p:Product)\n          WHERE p.category = 'Furniture'\n          WITH u, COUNT(p) > 0 AS clickedFurniture\n\n        \n          MATCH (product:Product)\n          WHERE clickedFurniture AND product.category = 'Furniture'\n          RETURN DISTINCT product\n      ", { userId: userId })];
                    case 2:
                        result = _a.sent();
                        console.log("Recommendations:", result.records.map(function (record) { return record.get('product').properties; }));
                        return [2 /*return*/, result.records.map(function (record) { return record.get('product').properties; })];
                    case 3: return [4 /*yield*/, session.close()];
                    case 4:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Neo4jService = __decorate([
        common_1.Injectable()
    ], Neo4jService);
    return Neo4jService;
}());
exports.Neo4jService = Neo4jService;
