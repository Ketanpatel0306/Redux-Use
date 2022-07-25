import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./reducer/reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducers = persistReducer(persistConfig, rootReducer);
export let store = createStore(persistedReducers, applyMiddleware(thunk));
export let persister = persistStore(store);
