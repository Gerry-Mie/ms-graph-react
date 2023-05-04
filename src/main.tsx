import React from 'react'
import ReactDOM from 'react-dom/client'
import {PublicClientApplication,  } from '@azure/msal-browser';
import {MsalProvider} from '@azure/msal-react';
import App from './App.tsx'
import {msalConfig} from "./config/auth.ts";
import {MantineProvider} from '@mantine/core';
import { Provider } from 'react-redux'
import {store} from "./store";

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <MsalProvider instance={msalInstance}>
                <App/>
            </MsalProvider>
        </MantineProvider>
        </Provider>
    </React.StrictMode>,
)
