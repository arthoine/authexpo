//App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { signIn, onAuthStateChange, signOutUser } from './authFunctions';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        onAuthStateChange(setEmail);
    }, []);

    return (
        <View>
            <Text>{email}</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Mot de passe"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Button title="Se connecter" onPress={() => signIn(email, password)} />
            <Button title="Se déconnecter" onPress={signOutUser} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
