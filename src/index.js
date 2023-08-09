import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import PageContext from "./Context/PageContext";

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

root.render(
    <PageContext>
        <App />
    </PageContext>
)