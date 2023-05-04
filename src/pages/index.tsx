import {createBrowserRouter} from "react-router-dom";
import Home from "./home.tsx";

export const pages = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    }
])