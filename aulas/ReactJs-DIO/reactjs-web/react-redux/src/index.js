import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { reducer } from "../redux/reducers";
import App from "./App";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();