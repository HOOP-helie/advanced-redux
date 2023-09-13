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
           
            const newItem = {
                id: data.id,
                title: data.title,
                quantity: 1,
                total: data.price,
                price: data.price

            }
            const itemsArr = [...state.items, newItem]
            state.items = itemsArr

        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleCart, addItemToCart } = cartSlice.actions

export default cartSlice.reducer