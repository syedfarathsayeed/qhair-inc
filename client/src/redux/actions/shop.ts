import { convertCollectionsSnapshotToMap, firestore } from "firebase/firebaseUtils"
import { AppThunkDispatch } from "redux/store"
import { CollectionData, InferValueTypes } from "types"

export const FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START"
export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS"
export const FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE"

const syncActions = {
    fetchCollectionsStart() {
        return {
            type: FETCH_COLLECTIONS_START
        } as const
    },
    fetchCollectionsSuccess(collections: CollectionData) {
        return {
            type: FETCH_COLLECTIONS_SUCCESS,
            collections
        } as const
    },
    fetchCollectionsFailure(errorMessage: string) {
        return {
            type: FETCH_COLLECTIONS_FAILURE,
            errorMessage
        } as const
    }
}

export type ShopActions = ReturnType<InferValueTypes<typeof syncActions>>

const asyncActions = {
    fetchCollections() {
        return (dispatch: AppThunkDispatch) => {
            const collectionsRef = firestore.collection("collections");
            dispatch(syncActions.fetchCollectionsStart());
            collectionsRef.get()
                .then(snapshot => {
                    const collections = convertCollectionsSnapshotToMap(snapshot)
                    dispatch(syncActions.fetchCollectionsSuccess(collections))
                })
                .catch(error => dispatch(syncActions.fetchCollectionsFailure(error)))
        }
    }
}

export const shopActions = { ...syncActions, ...asyncActions }