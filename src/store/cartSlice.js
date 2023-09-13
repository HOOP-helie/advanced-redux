import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showCart: false,
    items: [],
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.showCart = !state.showCart
        },
        addItemToCart: (state, action) => {
            const data = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === data.id);

            if (itemIndex !== -1) {
                state.items = state.items.map((item, index) => {
                    if (index === itemIndex) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                            total: item.total + item.price
                        };
                    }
                    return item;
                });
            } else {
                const newItem = {
                    ...data,
                    quantity: 1,
                    total: data.price
                };
                state.items = [...state.items, newItem];
            }
        }

    },
})

export const { toggleCart, addItemToCart } = cartSlice.actions

export default cartSlice.reducer