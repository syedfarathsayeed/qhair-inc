import { Appbar } from "components";
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage";

const QhairShopping: React.FunctionComponent<{}> = (props) => {

    return (
        <>
            <Appbar />
            <main>
                <Switch>
                    <Redirect from={"/"} to={"/home"} exact />
                    <Route path={"/home"} component={HomePage} />
                </Switch>
            </main>
        </>
    )
}

export default QhairShopping