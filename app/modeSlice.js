import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    mode : true
}


const modeSlice = createSlice({
    name : "Mode",
    initialState,
    reducers : {

        setMode : (state) => {
            state.mode = !state.mode
        }
    }
})



export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;