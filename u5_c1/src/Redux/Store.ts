import { combineReducers, legacy_createStore as createStore } from "redux";

import { productReducer } from "./Reducer";
const rootReducer = combineReducers({
    products : productReducer
})
   




const store = createStore(rootReducer)


export {store}