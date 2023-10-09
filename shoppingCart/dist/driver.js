"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
// Create a user
const jeremy = (0, functions_1.createUser)('Jeremy', 50);
const slapYaMama = (0, functions_1.createItem)('Slap Ya Mama Hot Sauce', 9.99, 'Experience the sensation of explosive Cajun heat and flavor with Slap Ya Mama\'s Hot Sauce.');
const colonCleaner = (0, functions_1.createItem)('Colon Cleaner Hot Sauce', 12.99, 'Professor Phardtpounders colon cleaner hot sauce - elixir of capsaicin extremus');
const rrf = (0, functions_1.createItem)('Rectal Rocket Fuel Hot Sauce', 10.99, 'Rectal rocket fuel island jerk hot sauce-The name says it all. This jerk sauce will knock you for a loop');
(0, functions_1.addToCart)(slapYaMama, jeremy, 2);
(0, functions_1.printCart)(jeremy);
//add 3
var items = [slapYaMama, colonCleaner, rrf];
items.forEach((item) => {
    (0, functions_1.addToCart)(item, jeremy, 1);
});
console.log("cart after add 3: ");
(0, functions_1.printCart)(jeremy);
(0, functions_1.changeCartItemQuantity)(jeremy, slapYaMama, 3);
console.log("cart after quant increase: ");
(0, functions_1.printCart)(jeremy);
//remove the stuff
var mahCart = (0, functions_1.getCart)(jeremy);
mahCart.forEach((item) => {
    (0, functions_1.removeItem)(item, jeremy);
});
console.log("cart after clearing: ");
(0, functions_1.printCart)(jeremy);
