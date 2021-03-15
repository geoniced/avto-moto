import React from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import App from "./components/app/app";
import {reducer} from "./store/reducer";

import openSansRegularWoff2 from "./assets/fonts/open-sans-regular.woff2";
import "./scss/style.scss";

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <Helmet>
        <link rel="preload" href={openSansRegularWoff2} as="font" type="font/woff2" crossOrigin/>
      </Helmet>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
