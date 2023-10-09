"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCart = exports.printCart = exports.cartTotal = exports.changeCartItemQuantity = exports.removeItem = exports.addToCart = exports.createItem = exports.createUser = void 0;
const types_1 = require("./types");
function createUser(name, age) {
    return new types_1.User(name, age);
}
exports.createUser = createUser;
function createItem(name, price, description) {
    return new types_1.Item(name, price, description);
}
exports.createItem = createItem;
function addToCart(item, user, quantity) {
    const index = user.cart.findIndex((cartItem) => cartItem.id == item.id);
    if (index == -1) {
        item.quantity = quantity;
        user.cart.push(item);
    }
    else {
        item.quantity += quantity;
    }
}
exports.addToCart = addToCart;
function removeItem(item, user) {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}
exports.removeItem = removeItem;
function changeCartItemQuantity(user, item, quantity) {
    const index = user.cart.findIndex((cartItem) => cartItem.id == item.id);
    if (index !== -1) {
        if (user.cart[index].quantity > quantity) {
            user.cart[index].quantity -= quantity;
        }
        else {
            user.cart[index].quantity += quantity;
        }
    }
}
exports.changeCartItemQuantity = changeCartItemQuantity;
function cartTotal(user) {
    return user.cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
exports.cartTotal = cartTotal;
function printCart(user) {
    user.cart.forEach((item) => {
        console.log("Item: " + item.name);
        console.log("Price: $" + item.price);
        console.log("Quantity: " + item.quantity);
        console.log("Description: " + item.description + "\n");
    });
    console.log("Cart Total: $" + cartTotal(user).toFixed(2) + "\n\n");
}
exports.printCart = printCart;
function getCart(user) {
    return user.cart;
}
exports.getCart = getCart;
