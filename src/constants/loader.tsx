import React, {useEffect} from 'react';
import {useMsal} from "@azure/msal-react";
import {LOGIN_REQUEST} from "./ms-graph.ts";
import {useAppDispatch} from "../store";
import {set_user_token} from "../store/slice/user.ts";

const Loader = () => {
    const {instance, accounts} = useMsal();

    const dispatch = useAppDispatch()
    useEffect(() => {
        instance.acquireTokenSilent({...LOGIN_REQUEST, account: accounts[0]})
            .then(res => dispatch(set_user_token(res.accessToken)))
    }, [instance])
    return (
        <div>

        </div>
    );
};

export default Loader;
