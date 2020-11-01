import React from "react"
import { Typography } from "@material-ui/core"
import { ItemCard } from "../"
import useStyles from "./Item_Styles"
import { Item as ItemType, Size } from "types"
import { useDispatch } from "react-redux"
import { AppThunkDispatch } from "redux/store"
import { cartActions } from "redux/actions/cart"

interface ItemProps {
    item: ItemType
}

const Item: React.FunctionComponent<ItemProps> = (props: ItemProps) => {

    const { name, price, imageUrl } = props.item

    const classes = useStyles()

    const dispatch = useDispatch<AppThunkDispatch>();

    const handleAddClick = () => {
        const cartItem = {
            ...props.item,
            quantity: 1,
            size: "s" as Size
        }
        dispatch(cartActions.addItem(cartItem))
    }

    return (
        <div>
            <ItemCard title="Add to cart" onClick={handleAddClick} imageUrl={imageUrl} />
            <div className={classes.footer}>
                <Typography>{name}</Typography>
                <Typography>{`${price}€`}</Typography>
            </div>
        </div>
    )
}

export default Item