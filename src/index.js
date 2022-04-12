import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import Coin from "./Coin";
import Movie from "./Movie";

const root = document.getElementById("root");
ReactDOMClient.createRoot(root).render(
    <Movie />
    // <Coin />
    // <App />
);
