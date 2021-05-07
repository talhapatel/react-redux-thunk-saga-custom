## First question is that what is redux and why we need it?

#### when user click on one button which is in one component and modal which is in another comonent show pop up so how can we do?

| component 1 modal should open // here we have variable isOpen = false
| component 2
| component 3 user click here isOpen should change to true so poppup can open

- we can pass props from parent to child and when click we do callback from child to parent and hadle this thing.but if application is larger and there are lots of small components nested so how we can manage think about that :thinking:

-thats why we need something which handle state to track and when its change we can handle our UI acording that.

- here we are using redux to manage our state.
  -redux has terminology you have seen : action,reducer,middleware but most confusing part at initial is how this all connect and communicate?

- first we need to install redux using ` npm i redux --save-dev`

- Create directory for store: and create file index.js

````// src/js/store/index.js

import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store; ```

As you can see, store is nothing but result of calling createStore function from the Redux library.CreateStore takes a reducer as the first argument and in our case we passed in rootReducer.
- create rootReducer file.
```const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  return state;
};

export default rootReducer; ```

````
