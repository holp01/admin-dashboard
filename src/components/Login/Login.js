import React, { useState } from 'react';
import { login } from '../../services/apiService';
import { useAuth } from '../../App';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    DialogFooter,
    Input,
    Switch,
    Typography,
    Checkbox,
    CardFooter
} from '@material-tailwind/react';

function Login() {
    const { user, login: authLogin } = useAuth(); // Get user and authLogin at once
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (user) {
        navigate('/dashboard');
        return null; // Return nothing to render
    }

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const data = await login(email, password);
            localStorage.setItem('token', data.token);
            localStorage.setItem('refreshToken', data.refreshToken);
            authLogin({ token: data.token, refreshToken: data.refreshToken });
            console.log("Logged in:", data.token);

            navigate('/dashboard'); // Redirecting to dashboard
        } catch (error) {
            console.error("Login error:", error.message);
            // TODO: Provide user feedback through an error message on the UI.
        }
    }

    return (
        <div className="flex h-screen items-center justify-center"> {/* This div centers the Card */}
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color="gray"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Welcome
                    </Typography>
                </CardHeader>
                <form onSubmit={handleLogin}>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Email" size="lg" onChange={e => setEmail(e.target.value)} />
                        <Input label="Password" type="password" size="lg" onChange={e => setPassword(e.target.value)} />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button type="submit" variant="gradient" fullWidth>
                            Sign In
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}

export default Login;
