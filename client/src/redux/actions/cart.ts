import { CartItem, InferValueTypes, Size } from "types"

export const ADD_ITEM = "ADD_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"
export const CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART"
export const UPDATE_ITEM_SIZE = "UPDATE_ITEM_SIZE"

export const cartActions = {
    addItem(item: CartItem) {
        return {
            type: ADD_ITEM,
            item
        } as const
    },
    removeItem(item: CartItem){
        return{
            type: REMOVE_ITEM,
            item
        } as const
    },
    clearItemFromCart(item: CartItem){
        return{
            type: CLEAR_ITEM_FROM_CART,
            item
        } as const
    },
    updateItemSize(item: CartItem, size: Size){
        return {
            type: UPDATE_ITEM_SIZE,
            item,
            size
        } as const
    }
}

export type CartActions = ReturnType<InferValueTypes<typeof cartActions>>