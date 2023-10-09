import {v4 as uuidv4} from 'uuid'

export type Items = {
    id:string
    name:string
    price:number
    quantity:number
    description:string
}

export type Users = {
    id:string
    name:string
    age: number
    cart:Items[]
}

export class User{
    constructor(public name:string, public age:number){
        this.id = uuidv4()
        this.cart = []
    }

    id:string
    cart:Items[]

}

export class Item{
    constructor(public name:string, public price:number, public description:string){
        this.id = uuidv4()
        this.quantity = 0
    }
    id:string
    quantity:number
}