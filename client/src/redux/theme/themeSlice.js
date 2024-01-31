import { createSlice } from "@reduxjs/toolkit";


const initialState={
    theme:'dark'

};

const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        themeHandler: (state)=>{
            state.theme=state.theme ==='dark'?'light':'dark';
        }
    }
}   
)
export const {themeHandler}=themeSlice.actions;
export default themeSlice.reducer;