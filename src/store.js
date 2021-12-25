import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { dictionaryReducer } from "./reducers/dictionaryReducer";
import { translateReducer } from "./reducers/translateReducer";

const initialState = {};

const reducer = combineReducers({
  translate: translateReducer,
  dictionary: dictionaryReducer,
});
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnchancer(applyMiddleware(thunk))
);

export default store;
