import {AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";
import {RouterProvider} from "react-router-dom";
import {pages} from "./pages";
import Login from "./pages/login.tsx";
import Loader from "./components/loader.tsx";

function App() {

    return (
        <>
            <AuthenticatedTemplate>
                <Loader>
                    <RouterProvider router={pages}/>
                </Loader>
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <Login/>
            </UnauthenticatedTemplate>
        </>
    )

}

export default App
