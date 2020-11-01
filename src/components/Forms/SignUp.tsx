import { Card, CardContent, TextField, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";
import { Button } from "..";
import Logo from "resources/images/qhairLogo.png";
import { auth, createUserProfileDocument } from "firebase/firebaseUtils"
import { useHistory } from "react-router"
import useStyles from "./index_styles";
import { Link } from "react-router-dom";

const initialUserState = {
    displayName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUp: React.FunctionComponent<{}> = () => {

    const classes = useStyles()

    const history = useHistory()

    const [currentUser, setCurrentUser] = React.useState(initialUserState)

    const isSmallScreen = useMediaQuery("(max-width: 600px)")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setCurrentUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async () => {
        const { displayName, phone, email, password, confirmPassword } = currentUser
        if (password !== confirmPassword) {
            alert("Passwords does not match")
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            createUserProfileDocument(user!, { displayName, phone })
            setCurrentUser(initialUserState)
            history.push("/home")
        } catch (error) {
            alert(error)
        }
    }

    const handleSignInClick = () => {
        history.push("/sign-in")
    }

    return (
        <div className={classes.root}>
            <Link to={"/"} >
                <img src={Logo} height={120} width={200} alt="Qhaic Inc" />
            </Link>
            <Typography className={classes.title}>
                Sign Up
            </Typography>
            <Card className={isSmallScreen ? classes.smallCard: classes.card}>
                <CardContent>
                    <form noValidate className={classes.form}>
                        <TextField
                            name={"displayName"}
                            label={"Display name"}
                            variant={"outlined"}
                            fullWidth
                            value={currentUser.displayName}
                            onChange={handleChange}
                            className={classes.textField}
                        />
                        <TextField
                            name="phone"
                            label={"Mobile number"}
                            variant={"outlined"}
                            value={currentUser.phone}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                        />
                        <TextField
                            type="email"
                            name="email"
                            label={"Email"}
                            variant={"outlined"}
                            fullWidth
                            value={currentUser.email}
                            onChange={handleChange}
                            className={classes.textField}
                        />
                        <TextField
                            name={"password"}
                            label={"Password"}
                            type={"password"}
                            variant={"outlined"}
                            value={currentUser.password}
                            onChange={handleChange}
                            fullWidth
                            className={classes.textField}
                        />
                        <TextField
                            name={"confirmPassword"}
                            label={"Confirm password"}
                            type={"password"}
                            value={currentUser.confirmPassword}
                            onChange={handleChange}
                            variant={"outlined"}
                            fullWidth
                            error={currentUser.password !== currentUser.confirmPassword}
                            className={classes.textField}
                        />
                        <div className={classes.footer}>
                            <Button variant="primary" label={"Sign Up"} onClick={handleSubmit} />
                            <div className={classes.signin}>
                                <Typography>
                                    Already a member ?
                            </Typography>
                                <Button label={"Sign In"} variant="secondary" onClick={handleSignInClick} />
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default SignUp