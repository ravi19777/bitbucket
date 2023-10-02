import React from "react";

import ReactDOM from "react-dom/client";
import App from "./src/App";

const Index = () =>
{
    return(
        <>
            <App />
        </>
    )
};

// create the root element to display our react app there
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Index />);