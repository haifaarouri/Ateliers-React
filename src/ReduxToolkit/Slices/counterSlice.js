const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment: (state, action) => {
            state.value ++; //state.value=state.value+action.payload;
        },
        decrement: (state, action) => {
            state.value --; // state.value -= action.payload;
        }
    }
})

const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;