import { ADD_CART, ADD_PRODUCT } from "./action.type"


function addToProduct(products:any){
    return {type : ADD_PRODUCT, payload : [...products]}
}

function addToCart(product:any){
    console.log(product)
    return {type : ADD_CART, payload: product}
}


export {addToProduct,addToCart}