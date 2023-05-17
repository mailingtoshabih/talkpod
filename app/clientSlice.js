import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    clients: []
}


const clientSlice = createSlice({
    name: "Client",
    initialState,
    reducers: {

        setClient : (state, action) => {
            state.clients = action.payload;
        }
    }
})



export const { setClient } = clientSlice.actions;
export default clientSlice.reducer;