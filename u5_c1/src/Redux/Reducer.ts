import { ADD_CART, ADD_PRODUCT } from "./action.type";


const init = {
    products : [],
    cartProducts: []
}
 
export const productReducer = (store = init ,action:any):any => {
// console.log(store)
    switch(action.type){
        case ADD_PRODUCT :
            return {...store, products : [ ...action.payload]  }
        case ADD_CART:
            return {...store, cartProducts: [...store.cartProducts, action.payload]  }
        default :
        return store;
    }

}
