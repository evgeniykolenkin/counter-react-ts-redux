import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CounterPage from "./pages/counter/CounterPage.tsx";
import { counterReducer } from "./pages/counter/reducer.tsx";
import "./index.css";
import "./reset.css";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, undefined, composeWithDevTools());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterPage />
    </Provider>
  </React.StrictMode>
);
