import { combineReducers, AnyAction } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cart from "./cart";
import home from "./home";
import shop from "./shop";
import user from "./user";

const persistConfig = {
  'key': "root",
  storage,
  whitelist: ["cart"]
}

const appReducer = combineReducers({
  user,
  cart,
  home,
  shop
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === "LOGOUT") {
    storage.removeItem("persist: root")
    state = undefined
  }

  return appReducer(state, action)
}

export default persistReducer(persistConfig, rootReducer)


