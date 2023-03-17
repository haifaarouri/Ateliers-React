import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        value:{}
    },
    reducers:{
        addToCart:(state,action)=>{
            state.value=state.value+action.payload;
        },
        RemoveItemFromCart:(state,action)=>{
            
        },
        DeleteItem:(state,action)=>{

        }
    }
})
export const {addToCart,RemoveItemFromCart,DeleteItem} = cartSlice.actions;
export default cartSlice.reducer;