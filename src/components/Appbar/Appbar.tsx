import Button from "components/Button"
import { useFirebase } from "firebase/firebaseUtils"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { userActions } from "redux/actions/user"
import { selectCartItems } from "redux/reducers/cart"
import { selectUser } from "redux/reducers/user"
import { AppState, AppThunkDispatch } from "redux/store"
import Logo from "resources/images/qhairLogo.png"
import CartDropDown from "../CartDropDown"
import useStyles from "./Appbar_Styles"

const Header: React.FC<{}> = (props) => {

    const dispatch = useDispatch<AppThunkDispatch>()

    const { logout } = useFirebase()

    const loggedUser = useSelector((state: AppState) => selectUser(state))

    const cartItems = useSelector(selectCartItems)

    const classes = useStyles()

    const history = useHistory()

    const handleSignInClick = () => {
        history.push("/sign-in")
    }

    const handleSignOutClick = async () => {
        await logout()
        dispatch(userActions.logout())
        history.push("/sign-in")
    }

    const handleShopClick = () => {
        history.push("/shop")
    }

    return (
        <header className={classes.root}>
            <Link to={"/home"} className={classes.logo}>
                <img src={Logo} height={60} alt="Qhaic Inc" />
            </Link>
            <nav className={classes.actions}>
                <Button label={"SHOP"} variant="secondary"
                    onClick={handleShopClick}
                    className={classes.button} />
                {loggedUser
                    ? <Button label={"Sign Out"}
                        variant="primary"
                        onClick={handleSignOutClick}
                        className={classes.button} />
                    : <Button label={"Sign in"}
                        variant="primary"
                        onClick={handleSignInClick}
                        className={classes.button} />}
                <CartDropDown cartItems={cartItems} />
            </nav>
        </header>
    )
}

export default Header