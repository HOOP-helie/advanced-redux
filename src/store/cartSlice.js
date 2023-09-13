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
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleCart } = cartSlice.actions

export default cartSlice.reducer