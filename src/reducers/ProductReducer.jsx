import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "productReducer",
    initialState: {
        data: [],
    },
    reducers: {
        addData: (state, action) => {
            console.log('State before adding data:', state);
            state.data.push(action.payload);
            console.log('State after adding data:', state);
        },
        removeData: (state, action) => {
            console.log('State before removing data:', state);
            state.data = state.data.filter(item => item.id !== action.payload);
            console.log('State after removing data:', state);
        },

    },
});

export const { addData, removeData, } = productSlice.actions;
export default productSlice.reducer;
