const { createSlice } = require('@reduxjs/toolkit')
import { IgameCard } from './../../interface/game.interface'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: [],
    },
    reducers: {
        setItemInCart: (
            state: { itemsInCart: IgameCard[] },
            action: { payload: IgameCard }
        ) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (
            state: { itemsInCart: IgameCard[] },
            action: { payload: number }
        ) => {
            state.itemsInCart = state.itemsInCart.filter(
                (game) => game.id !== action.payload
            )
        },
    },
})

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions
export default cartSlice.reducer
