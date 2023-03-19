import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
        },
        RemoveItemFromCart: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter((i) => i.id !== id);
        },
        DeleteItem: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find((i) => i.id === id);
            if (item) {
                item.quantity = quantity;
            }
        }
    }
})
export const { addToCart, RemoveItemFromCart, DeleteItem } = cartSlice.actions;
export default cartSlice.reducer;