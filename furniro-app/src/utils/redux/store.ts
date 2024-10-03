import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { getTotals } from './cartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

store.dispatch(getTotals());

export type RootState = ReturnType<typeof store.getState>;
export default store;