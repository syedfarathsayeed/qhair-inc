import { Appbar } from "components";
import Loader from "components/Loader/Loader";
import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

const HomePage = lazy(() => import("./HomePage"))
const ShopPage = lazy(() => import("./ShopPage"))
const CheckoutPage = lazy(() => import("./CheckoutPage"))

const QhairShopping: React.FunctionComponent<{}> = (props) => {

    return (
        <>
            <Appbar />
            <main>
                <Switch>
                    <Suspense fallback={Loader}>
                        <Redirect from={"/"} to={"/home"} exact />
                        <Route path={"/home"} component={HomePage} />
                        <Route path={"/shop"} component={ShopPage} />
                        <Route path={"/checkout"} component={CheckoutPage} />
                    </Suspense>
                </Switch>
            </main>
        </>
    )
}

export default QhairShopping