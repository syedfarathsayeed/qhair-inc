import React, { lazy } from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import useStyles from "./index_styles"

const ItemsPage = lazy(() => import("pages/CategoryPage"))
const CollectionsPage = lazy(() => import("pages/CollectionsPage"))

const ShopPage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

    const { match } = props

    const classes = useStyles()

    return (
        <div className={classes.content}>
            <Switch>
                <Route exact path={match.path} component={CollectionsPage} />
                <Route exact path={`${match.path}/:categoryId`} component={ItemsPage} />
            </Switch>
        </div>
    )
}

export default ShopPage