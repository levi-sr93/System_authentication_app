import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  authentication: authReducer,
});

//creating middleware
const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, middleware);
