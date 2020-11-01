import { IconButton, Typography } from "@material-ui/core"
import { Delete as DeleteIcon } from "@material-ui/icons"
import React from "react"
import { useDispatch } from "react-redux"
import { cartActions } from "redux/actions/cart"
import { AppThunkDispatch } from "redux/store"
import { CartItem as CartItemType } from "types"
import useStyles from "./CartItem_Styles"

interface CartItemProps {
    cartItem: CartItemType
}

const CartItem: React.FC<CartItemProps> = (props) => {

    const classes = useStyles()

    const dispatch = useDispatch<AppThunkDispatch>();

    const { imageUrl, name, quantity, price } = props.cartItem

    const onDelete = () => { 
        dispatch(cartActions.clearItemFromCart(props.cartItem))
    }

    return (
        <div className={classes.root}>
            <img src={imageUrl} alt={name} height={120} width={100} />
            <div>
                <Typography>{name}</Typography>
                <Typography>{`${quantity} X ${price}€`}</Typography>
            </div>
            <IconButton onClick={onDelete}>
                <DeleteIcon color="primary" />
            </IconButton>
        </div>
    )
}

export default CartItem