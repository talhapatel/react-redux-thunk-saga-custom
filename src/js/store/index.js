import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

// for saga we have to initilise first
const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /*   storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk)) */
  storeEnhancers(
    applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)
  )
);
export default store;

initialiseSagaMiddleware.run(apiSaga);
/* When to use redux-thunk? redux-thunk is a nice middleware that works very well for most use cases. But, 
if your asynchronous logic involves more complex scenarios, or if you have specific requirements, 
then redux saga might be a better fit. */
// npm i redux-thunk --save-dev // yarn add redux-thunk --save-dev

/* What is redux-saga? redux-saga is a Redux middleware for managing side effects. 
With redux-saga you can have a separate thread in your application for dealing with impure actions: 
API calls, storage access, and more. */
