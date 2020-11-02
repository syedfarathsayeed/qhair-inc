import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Logo from "resources/images/qhairLogo.png";
import useStyles from "./Stripe.styles";

interface StripeProps {
    price: number
}

const Stripe: React.FC<StripeProps> = (props) => {
    const classes = useStyles()
    const priceForStripe = props.price * 100;
    const publishableKey = "pk_test_51HcA81C6cZibM74nzC65RsBFr53QEy5dhlOrSRCwg5SgAtDqwrq2InBlzp8buQO3txhZHyTsl1shtlblmgIJ7wh400tekHl9UL"

    const onToken = () => {
        alert("Payment successful")
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