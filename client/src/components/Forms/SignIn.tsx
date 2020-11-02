import { Card, CardContent, TextField, Typography, useMediaQuery } from "@material-ui/core";
import { signInWithGoogle, useFirebase } from "firebase/firebaseUtils";
import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import GoogleIcon from "resources/images/googleLogo.png";
import Logo from "resources/images/qhairLogo.png";
import { Button } from "..";
import useStyles from "./index_styles";

const initialFormValues = {
    email: "",
    password: ""
}

const SignIn: React.FunctionComponent<{}> = () => {

    const classes = useStyles()

    const history = useHistory()

    const { login } = useFirebase()

    const [formValues, setFormValues] = React.useState(initialFormValues)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const [isTouched, setIsTouched] = React.useState({
        email: false,
        password: false
    })

    const [isSubmitting, setIsSubmitting] = React.useState(false)

    const isSmallScreen = useMediaQuery("(max-width: 600px)")

    const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setIsTouched({
            ...isTouched,
            [event.target.name]: true
        })
    }

    const handleSignUpClick = () => {
        history.push("/sign-up")
    }

    const handleSignInClick = async () => {
        if (!formValues.email) {
            return setIsTouched({
                ...isTouched,
                email: true
            })
        }
        else if (!formValues.password) {
            return setIsTouched({
                ...isTouched,
                password: true
            })
        } else {
            setIsSubmitting(true)
            try {
                await login(formValues.email, formValues.password)
                history.push("/home")
            } catch (e) {
                alert(e)
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" && !isSubmitting) {
            handleSignInClick()
        }
    }

    const showError = (isTouched: boolean, value: string) => {
        return isTouched && value.length === 0
    }

    return (
        <div className={classes.root}>
            <Link to={"/"}>
                <img src={Logo} height={120} width={200} alt="Qhaic Inc"/>
            </Link>
            <Typography className={classes.title}>
                Sign In
            </Typography>
            <Card className={isSmallScreen ? classes.smallCard: classes.card}>
                <CardContent className={classes.cardContent}>
                    <form noValidate className={classes.form}>
                        <TextField
                            type="text"
                            placeholder={showError(isTouched.email, formValues.email)
                                ? "Please enter your email address"
                                : "Email"}
                            variant={"outlined"}
                            fullWidth
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onKeyDown={handleKeyDown}
                            error={showError(isTouched.email, formValues.email)}
                            className={classes.textField}
                        />
                        <TextField
                            type={"password"}
                            variant={"outlined"}
                            placeholder={showError(isTouched.password, formValues.password)
                                ? "Please enter your password"
                                : "Password"}
                            fullWidth
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={showError(isTouched.password, formValues.password)}
                            onKeyDown={handleKeyDown}
                            className={classes.textField}
                        />
                    </form>
                    <Button label={"Sign In"}
                        variant="primary"
                        onClick={handleSignInClick}
                        loading={isSubmitting} />
                    <Typography className={classes.connect}>
                        <span className={classes.span}>Not a member?</span>
                    </Typography>
                    <Button label={"Sign Up"} variant={"primary"} onClick={handleSignUpClick} />
                    <Typography className={classes.connect}>
                        <span className={classes.span}>or connect with</span>
                    </Typography>
                    <img src={GoogleIcon} width={50} alt="Gmail sign in" className={classes.icon} onClick={signInWithGoogle} />
                </CardContent>
            </Card>
        </div>
    )
}

export default SignIn