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
        addItem: (state, action) => {
            const data = action.payload;
            const existingItem = state.items.find((item) => item.id === data.id)

            if (!existingItem) {
                const newItem = {
                    ...data,
                    quantity: 1,
                    total: data.price
                };
                state.items.push(newItem)

            } else {
                existingItem.quantity++
                existingItem.total = existingItem.total + existingItem.price
            }
        },

        removeItem: (state, action) => {
            const data = action.payload
            const existingItem = state.items.find((item) => item.id === data.id)

            if (existingItem.quantity > 1) {
                existingItem.quantity--
                existingItem.total = existingItem.total - existingItem.price
            } else {
                state.items = state.items.filter(item => item.id !== data.id);
            }
        }
    }


})

export const { toggleCart, addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer