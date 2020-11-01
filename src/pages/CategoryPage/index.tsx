import { Container, Item, Title } from "components";
import Loader from "components/Loader/Loader";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { shopActions } from "redux/actions/shop";
import { AppThunkDispatch } from "redux/store";
import { selectCollections } from "redux/reducers/shop";
import { CollectionData } from "types";
import useStyles from "./index_styles"

interface RouteChildrenProps {
    categoryId: string
}

const CategoryPage: React.FunctionComponent<RouteComponentProps<RouteChildrenProps>> = (props) => {

    const { match } = props

    const params = match.params

    const classes = useStyles()

    const dispatch = useDispatch<AppThunkDispatch>();

    React.useEffect(() => {
        dispatch(shopActions.fetchCollections())
    }, [dispatch])

    const collections = useSelector(selectCollections)

    if (!collections) {
        return <Loader />
    }

    const category = collections[params.categoryId as keyof CollectionData]

    return (
        <Container>
            <Title>{category.title}</Title>
            <Container variant="content" className={classes.category}>
                {category.items.map(item => <Item key={item.id} item={item} />)}
            </Container>
        </Container>
    )

}

export default CategoryPage