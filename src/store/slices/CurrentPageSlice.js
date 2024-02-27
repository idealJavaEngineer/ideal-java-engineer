import { createSlice } from "@reduxjs/toolkit";


//creating the slice for the state of currentPageSlice
export const CurrentPageSlice = createSlice({
    name: 'currentPage',
    initialState: {
        currentPageInstance : 'Home',
    },
    reducers: {
        changeCurrentPageInstance : (state, action) => {
            state.currentPageInstance = action.payload
        },
    },
})

//Export action to be taken place on the reducer
export const {changeCurrentPageInstance} = CurrentPageSlice.actions;

//export reducer as a default 
export default CurrentPageSlice.reducer;