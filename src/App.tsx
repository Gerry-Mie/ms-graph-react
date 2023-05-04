import {AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";
import {RouterProvider} from "react-router-dom";
import {pages} from "./pages";
import Login from "./pages/login.tsx";

function App() {
    return (
        <>
            <AuthenticatedTemplate>
                <RouterProvider router={pages}/>
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <Login/>
            </UnauthenticatedTemplate>
        </>
    )

}

export default App
