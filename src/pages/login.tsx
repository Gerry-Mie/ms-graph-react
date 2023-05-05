import {Box, Button, Center, createStyles, Group, Image, Title} from "@mantine/core";
import msLogo from '../assets/microsoft.gif'
import {useMsal} from "@azure/msal-react";
import {LOGIN_REQUEST} from "../constants/ms-graph.ts";

const useStyle = createStyles((theme) => ({
    root: {
        background: theme.fn.gradient({from: '#1b6db0', to: '#306b6e', deg: 150}),
        height: '100vh',
        position: 'relative',
    },

    loginContent: {
        position: 'absolute',
        right: 90,
        top: '50%',
        backgroundColor: 'rgba(255,255,255,0.32)',
        padding: 30,
        borderRadius: 4,
        transform: 'translateY(-50%)'
    }
}))

const Login = () => {

    const {classes} = useStyle()
    const { instance } = useMsal();

    const login = () => {
        instance.loginRedirect(LOGIN_REQUEST).catch(console.log)
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.loginContent}>
                <Group>
                    <Image width={80} src={msLogo}/>
                    <Title color='#fff'>POWERED BY MICROSOFT</Title>
                </Group>
                <Center>
                    <Button onClick={login} px={40} bg='red' size='md'>Login</Button>
                </Center>
            </Box>

        </Box>
    );
};

export default Login;
