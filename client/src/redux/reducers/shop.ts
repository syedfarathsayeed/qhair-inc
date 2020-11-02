import { FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, ShopActions } from "redux/actions/shop";
import { CollectionData } from "types";
import { AppState } from "../store";


interface ShopState {
    collections: CollectionData | null,
    isFetching: boolean,
    errorMessage?: string
}

const initialState: ShopState = {
    collections: null,
    isFetching: false
}

export default function shop(state: ShopState = initialState, actions: ShopActions): ShopState {
    switch (actions.type) {
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }

        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: actions.collections
            }

        case FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: actions.errorMessage
            }

        default:
            return state;
    }
}

export const selectCollections = ({ shop }: AppState): CollectionData | null => {
    return shop.collections
}

export const selectCollectionsAsArray = (state: AppState) => {
    const collections = selectCollections(state)
    return collections ? Object.keys(collections).map(key => collections[key as keyof CollectionData]) : []
}

export const selectIsCollectionFetching = ({ shop }: AppState) => {
    return shop.isFetching
}