import { AnyAction, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import thunkMiddleWare, { ThunkAction, ThunkDispatch } from "redux-thunk";
import rootReducer from "./reducers"

const middlewares = [thunkMiddleWare]

export const appStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export type AppState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(appStore)

/**
 * This is the ThunkAction specific to the application. This type should 
 * be used everywhere an async action is defined.
 * 
 * @template A the final action type of the returned object
 */
export type AppThunkAction<A> = ThunkAction<Promise<A>, AppState, null, AnyAction>
/**
 * This is the ThunkDispatch specific to the application. This type should
 * be used everywhere an async dispatch is defined.
 */
export type AppThunkDispatch = ThunkDispatch<AppState, null, AnyAction>