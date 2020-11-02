import React from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";
import Logo from "resources/images/qhairLogo.png";
import axios from "axios";
import useStyles from "./Stripe.styles";

interface StripeProps {
    price: number
}

const Stripe: React.FC<StripeProps> = (props) => {
    const classes = useStyles()
    const priceForStripe = props.price * 100;
    const publishableKey = "pk_test_51HcA81C6cZibM74nzC65RsBFr53QEy5dhlOrSRCwg5SgAtDqwrq2InBlzp8buQO3txhZHyTsl1shtlblmgIJ7wh400tekHl9UL"

    const onToken = (token: Token) => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token
            }
        }).then(res => {
            alert("payment successful")
        }).catch(error => {
            console.log("payment error", JSON.parse(error))
            alert("Problem with payment. Please use the given test credit card for payments")
        })
    }

    return (
        <StripeCheckout
            label="Proceed to Payment"
            name={"Qhair Inc"}
            billingAddress
            shippingAddress
            image={Logo}
            description={`Your total is ${props.price}€`}
            amount={priceForStripe}
            panelLabel={"Pay now"}
            token={onToken}
            stripeKey={publishableKey}
            ComponentClass={classes.button}
        />
    )
}

export default Stripe