import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from "react-helmet";
import App from "./components/app/app";
import openSansRegularWoff2 from "./fonts/open-sans-regular.woff2";
import "./scss/style.scss";

ReactDOM.render(
    <>
      <Helmet>
        <link rel="preload" href={openSansRegularWoff2} as="font" type="font/woff2" crossOrigin/>
      </Helmet>
      <App />
    </>,
    document.getElementById(`root`)
);
