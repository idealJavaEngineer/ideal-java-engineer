import { configureStore } from "@reduxjs/toolkit";
import CurrentPageReducer from './slices/CurrentPageSlice';


export default configureStore({
    reducer: {
        currentPageState : CurrentPageReducer
    }
})