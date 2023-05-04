import {RedirectRequest} from "@azure/msal-browser";

export const LOGIN_REQUEST:  RedirectRequest = {
    scopes: [
        // user
        "User.Read",
        //task
        'Tasks.Read, Tasks.ReadWrite, Group.Read.All, Group.ReadWrite.All'
    ]
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */

export const GRAPH_ENDPOINT = "https://graph.microsoft.com/v1.0/me"
