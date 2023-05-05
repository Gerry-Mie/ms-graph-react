import {useEffect, useState} from 'react';
import {useMsal} from "@azure/msal-react";
import {LOGIN_REQUEST} from "../constants/ms-graph.ts";
import {useAppDispatch} from "../store";
import {set_user_token} from "../store/slice/user.ts";

const Loader = (props: any) => {

    const {instance, accounts} = useMsal();
    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        instance.acquireTokenSilent({...LOGIN_REQUEST, account: accounts[0]})
            .then(res => {

                dispatch(set_user_token(res.accessToken))
                setIsLoading(false)
            })
    }, [instance])

    if (isLoading) return <h1>Loading</h1>

    return (
        <div>
            {props.children}
        </div>
    );
};

export default Loader;
