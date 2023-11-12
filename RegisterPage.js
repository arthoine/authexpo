// RegisterPage.js
import React, { useState } from 'react';
import AuthForm from './AuthForm';
import { createUser } from './authFunctions';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateUser = async () => {
        await createUser(email, password);
    };

    return (
        <AuthForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onSubmit={handleCreateUser}
            buttonText="Créer un compte"
        />
    );
};

export default RegisterPage;
