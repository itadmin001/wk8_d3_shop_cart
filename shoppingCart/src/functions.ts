import { Items, Item, User } from './types';


export function createUser(name:string, age:number):User{
    return new User(name,age)
}

export function createItem(name:string, price:number, description:string):Item{
    return new Item(name,price,description)
}

export function addToCart(item:Items, user:User, quantity:number):void{
    const index = user.cart.findIndex((cartItem)=> cartItem.id == item.id)
    
    if(index == -1){
        item.quantity = quantity
        user.cart.push(item)
    }else{
        item.quantity += quantity
    }
    
}

export function removeItem(item:Items,user:User):void{
    user.cart = user.cart.filter((cartItem)=> cartItem.id !== item.id)
}


export function changeCartItemQuantity(user:User,item:Items,quantity:number):void{
    const index = user.cart.findIndex((cartItem)=> cartItem.id == item.id)

    if(index !== -1){
        if(user.cart[index].quantity > quantity){
            user.cart[index].quantity -= quantity
        }else{
            user.cart[index].quantity += quantity
        }
    }
}

export function cartTotal(user:User):number{
    return user.cart.reduce((total:number,item:Items) => total+item.price*item.quantity,0)
}

export function printCart(user:User):void{
    user.cart.forEach((item)=>{
        console.log("Item: "+item.name)
        console.log("Price: $"+item.price)
        console.log("Quantity: "+item.quantity)
        console.log("Description: "+item.description+"\n")
    })
    console.log("Cart Total: $"+cartTotal(user).toFixed(2)+"\n\n")
}

export function getCart(user:User):Items[]{
    return user.cart
}