import{
    createUser,
    createItem,
    addToCart,
    getCart,
    removeItem,
    printCart,
    changeCartItemQuantity
} from './functions'

// Create a user
const jeremy = createUser('Jeremy', 50)

const slapYaMama = createItem('Slap Ya Mama Hot Sauce',9.99,'Experience the sensation of explosive Cajun heat and flavor with Slap Ya Mama\'s Hot Sauce.')
const colonCleaner = createItem('Colon Cleaner Hot Sauce', 12.99, 'Professor Phardtpounders colon cleaner hot sauce - elixir of capsaicin extremus')
const rrf = createItem('Rectal Rocket Fuel Hot Sauce', 10.99, 'Rectal rocket fuel island jerk hot sauce-The name says it all. This jerk sauce will knock you for a loop')

addToCart(slapYaMama, jeremy,2)

printCart(jeremy)

//add 3
var items = [slapYaMama,colonCleaner,rrf]
items.forEach((item) =>{
    addToCart(item,jeremy,1)
})

console.log("cart after add 3: ")
printCart(jeremy)

changeCartItemQuantity(jeremy,slapYaMama,3)
console.log("cart after quant increase: ")
printCart(jeremy)

//remove the stuff
var mahCart = getCart(jeremy)

mahCart.forEach((item)=>{
    removeItem(item,jeremy)
})

console.log("cart after clearing: ")
printCart(jeremy)
