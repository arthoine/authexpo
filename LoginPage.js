// LoginPage.js
import React, { useState } from 'react';
import AuthForm from './AuthForm';
import { signIn } from './authFunctions';

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        await signIn(email, password);
    };

    return (
        <AuthForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onSubmit={handleSignIn}
            buttonText="Se connecter"
        />
    );
};

export default LoginPage;
