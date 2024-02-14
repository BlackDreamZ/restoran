/* eslint-disable react/no-children-prop */
import ReactDom from "react-dom/client";
import './index.css'
import { restaurants } from "./constants/mock";
import { App } from "./App.jsx";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <App
        products={ restaurants }
    />
);