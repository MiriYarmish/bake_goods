import { createStore,combineReducers } from "redux";
import { dataReducerUser } from "./dataReducerUser";
import { dataReducerProduct } from "./dataReducerProduct";

const d = combineReducers({dataP:dataReducerProduct,dataU:dataReducerUser})
export const myStore=createStore(d)
