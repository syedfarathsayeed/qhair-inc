import { CategoryCard, Container, Title } from "components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { shopActions } from "redux/actions/shop";
import { AppState, AppThunkDispatch } from "redux/store";
import { selectCollectionsAsArray } from "redux/reducers/shop";

const CollectionsPage: React.FunctionComponent<{}> = () => {

    const dispatch = useDispatch<AppThunkDispatch>();

    React.useEffect(() => {
        dispatch(shopActions.fetchCollections())
    }, [dispatch])

    const collections = useSelector((state: AppState) => selectCollectionsAsArray(state))

    return (
        <Container>
            <Title>Collections</Title>
            <div>
                {collections.map(({ title, items, routeUrl, id }) => {
                    return <CategoryCard key={id} title={title} items={items} routeUrl={routeUrl} />
                })}
            </div>
        </Container>
    )

}

export default CollectionsPage