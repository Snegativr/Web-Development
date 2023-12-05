import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './ProductReducer';
const store = configureStore({
    reducer: {
        productReducer: productsReducer,
        // commentsReducer,
    },
});

export default store