import ItemsPage from "pages/CategoryPage";
import CollectionsPage from "pages/CollectionsPage";
import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import useStyles from "./index_styles"

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