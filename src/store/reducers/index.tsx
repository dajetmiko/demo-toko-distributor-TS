import { combineReducers } from "redux"
import { cacheLamanReducer } from "./cacheLaman"


const semuaReducer = combineReducers({
  cacheLaman: cacheLamanReducer,
})

export type StateReducer = ReturnType<typeof semuaReducer>

export default semuaReducer