import { configureStore } from "@reduxjs/toolkit";
import employSlice from "../Slice/employSlice";


const store = configureStore({
    reducer: {
    employ : employSlice
    }
})

export default store;