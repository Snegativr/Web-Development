import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "productReducer",
    initialState: {
        data: [],
    },
    reducers: {
        addData: (state, action) => {
            state.data.push(action.payload);
            state.filteredData = state.data;
        },
        removeData: (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload);
            state.filteredData = state.data;
        },

    },
});

export const { addData, removeData, } = productSlice.actions;
export default productSlice.reducer;
