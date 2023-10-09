"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = (0, uuid_1.v4)();
        this.cart = [];
    }
}
exports.User = User;
class Item {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.id = (0, uuid_1.v4)();
        this.quantity = 0;
    }
}
exports.Item = Item;
