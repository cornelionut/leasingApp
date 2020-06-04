import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter } from "connected-react-router";
import thunk from "redux-thunk";
import { reducers } from "../reducers";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();

export const store = createStore(
  connectRouter(browserHistory)(reducers),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//  applyMiddleware(thunk) permite apelul functiilor asincrone in actions. In acest caz reducerul va fi o functie pura care doar va actualiza stateul "store".
