import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { studentReducer } from "./reducers/studentReducer";

import {
  authReducer,
  userReducers,
  forgotPasswordReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  students: studentReducer,
  auth: authReducer,
  user: userReducers,
  forgotPassword: forgotPasswordReducer,
});
 
let initialState = {};

const middlware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
