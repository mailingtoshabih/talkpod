import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    isAuth : false,
    user : null,
    phone : "",
    hash : ""
}


const authSlice = createSlice({
    name : "Auth",
    initialState,
    reducers : {

        setAuth : (state, action) => {
            const user = action.payload;
            state.user = user;
            
            if (!state.user){
                state.isAuth = false;
            }
            else{
                state.isAuth = true;
            }
        },

        setOtp : (state, action) => {
            const { phone, hash } = action.payload;
            state.phone = phone;
            state.hash = hash;
        }
    }
})



export const { setAuth, setOtp } = authSlice.actions;
export default authSlice.reducer;