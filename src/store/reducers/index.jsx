import { combineReducers } from "redux"
import { cacheLamanReducer } from "./cacheLaman"


const semuaReducer = combineReducers({
  cacheLaman: cacheLamanReducer,
})

export default semuaReducer