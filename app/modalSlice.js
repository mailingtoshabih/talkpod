import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    toggle : false
}


const modalSlice = createSlice({
    name : "toggle",
    initialState,
    reducers : {
        toggleModal : (state, action) => {
            state.toggle = action.payload;
        }
    }
})


export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;