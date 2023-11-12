// AuthForm.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AuthForm = ({ email, setEmail, password, setPassword, onSubmit, buttonText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connectez-vous ou créez un compte</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Button title={buttonText} onPress={onSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
    },
});

export default AuthForm;
