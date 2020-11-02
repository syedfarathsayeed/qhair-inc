import { Link, Typography } from "@material-ui/core";
import { Container, Item } from "../";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Item as ItemType } from "types"
import useStyles from "./CategoryCard_Styles";

interface CategoryCardProps {
    title: string,
    routeUrl: string,
    items: Array<ItemType>
}


const CategoryCard: React.FunctionComponent<CategoryCardProps> = (props) => {

    const { title, items, routeUrl } = props

    const classes = useStyles()

    return (
        <Container variant="content" className={classes.content}>
            <div className={classes.header}>
                <Typography variant="h5">{title}</Typography>
                <Link component={RouterLink} to={routeUrl}>
                    See more
                </Link>
            </div>

            <div className={classes.container}>
                {items
                    .filter((e, index) => index < 4)
                    .map(item => (
                        <Item key={item.id} item={item} />
                    ))}
            </div>
        </Container>
    )
}

export default CategoryCard