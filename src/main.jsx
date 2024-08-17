import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import CountryDetails from "./components/CountryDetails.jsx";
import MainContainer from "./components/MainContainer"

const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children:[{
        path: "/",
        element: <MainContainer />
    },
    {
        path: "/:countryName",
        element: <CountryDetails />
    }
]
}])

ReactDOM.createRoot(document.getElementById("root")).render( <RouterProvider router={router} />);
