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
            const alreadyInCartItem = state.items.find(item => item.id === data.id);
            const itemsArr = [...state.items]

            if (alreadyInCartItem) {
                const modifiedItem = {
                    ...alreadyInCartItem,
                    quantity: alreadyInCartItem.quantity + 1,
                    total: alreadyInCartItem.total + alreadyInCartItem.price
                }
                let indexOfItem = state.items.indexOf(alreadyInCartItem)
                itemsArr[indexOfItem] = modifiedItem;

            } else {
                const newItem = {
                    ...data,
                    quantity: 1,
                    total: data.price
                }

                itemsArr.push(newItem)
            }

            state.items = itemsArr

        }
    },
})

export const { toggleCart, addItemToCart } = cartSlice.actions

export default cartSlice.reducer