import Button from "components/Button"
import { useFirebase } from "firebase/firebaseUtils"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { userActions } from "redux/actions/user"
import { selectCartItems } from "redux/reducers/cart"
import { selectUser } from "redux/reducers/user"
import { AppState, AppThunkDispatch } from "redux/store"
import blackLogo from "resources/images/qhairLogo.png"
import whiteLogo from "resources/images/logo.png"
import CartDropDown from "../CartDropDown"
import clsx from "clsx"
import useStyles from "./Appbar_Styles"

const Header: React.FC<{}> = (props) => {

    const dispatch = useDispatch<AppThunkDispatch>()

    const { logout } = useFirebase()

    const [showScroll, setShowScroll] = React.useState(false)

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

    const checkScroll = () => {
        if (window.pageYOffset > 100) {
            setShowScroll(true)
        } else {
            setShowScroll(false)
        }
    }

    window.addEventListener("scroll", checkScroll)

    return (
        <header className={showScroll ? clsx(classes.base, classes.colored) : clsx(classes.base, classes.root)}>
            <Link to={"/home"} className={classes.logo}>
                <img src={showScroll ? whiteLogo : blackLogo} height={60} alt="Qhaic Inc" />
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
                <CartDropDown cartItems={cartItems} showScroll={showScroll} />
            </nav>
        </header>
    )
}

export default Header