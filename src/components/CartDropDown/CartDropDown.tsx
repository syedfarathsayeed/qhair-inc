import React from "react"
import { Badge, IconButton, Popover } from "@material-ui/core"
import { ShoppingCart as CartIcon } from '@material-ui/icons'
import useStyles from "./CartDropDown_styles"
import CartItem from "components/CartItem"
import { CartItem as CartItemType } from "types"
import Button from "components/Button"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUser } from "redux/reducers/user"
import { selectCartItemsCount } from "redux/reducers/cart"
import { AppState } from "redux/store"

interface CartDropDownProps {
    cartItems: Array<CartItemType>
    showScroll: boolean
}

const CartDropDown: React.FC<CartDropDownProps> = (props) => {

    const { cartItems, showScroll } = props

    const history = useHistory()

    const classes = useStyles()

    const loggedUser = useSelector(selectUser)

    const cartItemsCount = useSelector((state: AppState) => selectCartItemsCount(state))

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

    const onCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget)
    }

    const open = Boolean(anchorEl)

    const handleClose = () => setAnchorEl(null)

    const handleCheckoutClick = () => {
        handleClose()
        if (!loggedUser) {
            history.push("/sign-in")
        } else {
            history.push("/checkout")
        }
    }

    const renderDropdownContent = (cartItems: Array<CartItemType>) => {
        return cartItems.length > 0
            ? (
                <>
                    <div className={classes.cartItems}>
                        {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
                    </div>
                    <Button label="Go to checkout" onClick={handleCheckoutClick} variant="primary" />
                </>
            ) : (
                <div className={classes.noDataText}>
                    {"Your cart is empty"}
                </div>
            )
    }

    return (
        <>
            <IconButton size="small" className={classes.iconButton} onClick={onCartClick}>
                <Badge badgeContent={cartItemsCount} color="primary" showZero>
                    <CartIcon color={showScroll ? "secondary": "action"}/>
                </Badge>
            </IconButton>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                classes={{
                    paper: classes.paper
                }}
            >
                {renderDropdownContent(cartItems)}
            </Popover>
        </>
    )
}

export default CartDropDown