import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    name: "",
    avatar: ""
}


const activationSlice = createSlice({
    name: "Activation",
    initialState,
    reducers: {

        setName : (state, action) => {
            state.name = action.payload;
        },

        setAvatar : (state, action) => {
            state.avatar = action.payload;
        },
    }
})



export const { setName, setAvatar } = activationSlice.actions;
export default activationSlice.reducer;