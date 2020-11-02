import { ADD_ITEM, CartActions, CLEAR_ITEM_FROM_CART, REMOVE_ITEM, UPDATE_ITEM_SIZE } from "redux/actions/cart"
import { AppState } from "redux/store"
import { CartItem, Size } from "types"

interface CartState {
    cartItems: Array<CartItem>
}

const initialState = {
    cartItems: []
}

export default function cart(state: CartState = initialState, actions: CartActions): CartState {
    switch (actions.type) {
        case ADD_ITEM: {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, actions.item)
            }
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                cartItems: removeItemsFromCart(state.cartItems, actions.item)
            }
        }
        case CLEAR_ITEM_FROM_CART: {
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== actions.item.id)
            }
        }
        case UPDATE_ITEM_SIZE: {
            return {
                ...state,
                cartItems: updateCartItemSize(state.cartItems, actions.item, actions.size)
            }
        }
        default:
            return state;
    }
}

export const selectCartItems = ({ cart }: AppState): Array<CartItem> => {
    return cart.cartItems
}

export const selectCartItemsCount = (state: AppState): number => {
    return selectCartItems(state).reduce((count, item) => {
        return count + item.quantity
    }, 0)
}

export const selectCartTotal = (state: AppState): number => {
    return selectCartItems(state).reduce((total, cartItem) => {
        return total + (cartItem.quantity * cartItem.price)
    }, 0)
}


const addItemToCart = (cartItems: Array<CartItem>, itemToAdd: CartItem) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === itemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
}

const removeItemsFromCart = (cartItems: Array<CartItem>, itemToRemove: CartItem) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemToRemove.id
    );

    if (existingCartItem!.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === itemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
}

const updateCartItemSize = (cartItems: Array<CartItem>, cartItem: CartItem, size: Size) => {
    return cartItems.map(item => item.id === cartItem.id ? { ...item, size } : item)
}