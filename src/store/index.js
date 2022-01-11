import { createStore, applyMiddleware, compose } from "redux";
import prommiseMiddleware from "redux-promise";
import appReducers from "./reducers";

const ReduxStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    appReducers,
    composeEnhancers(applyMiddleware(prommiseMiddleware))
  );

  return store;
};

export default ReduxStore;
