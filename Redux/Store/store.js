import { combineReducers, configureStore } from "@reduxjs/toolkit";
import employSlice from "../Slice/employSlice";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

let presistConfig ={
    key:'root',
    storage:AsyncStorage
}
let rootReducer = combineReducers({
    employ : employSlice
})

let presistedReducer = persistReducer(presistConfig, rootReducer)

const store = configureStore({
   reducer:  presistedReducer,
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({
     serializableCheck: false, // Disable serializable check
   }),
})

export default store;