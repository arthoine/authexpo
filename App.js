// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {signIn, onAuthStateChange, signOutUser} from './authFunctions';
import { Button } from 'react-native';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import EvenementPage from "./EvenementPage";
import {signOut} from "firebase/auth";

const Tab = createBottomTabNavigator();

export default function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChange((user) => {
            setIsAuthenticated(!!user);
            if (user) {
                setEmail(user.email);
            } else {
                setEmail('');
                setPassword('');
            }
        });
        return () => unsubscribe();
    }, []);

    const handleSignIn = async () => {
        await signIn(email, password);
    };

    const LogoutButton = ({ navigation }) => {
        const handleLogout = () => {
            signOutUser();
            navigation.navigate('AuthPage');
        };

        return (
            <Button title="Déconnexion" onPress={handleLogout} />
        );
    };

    if (!isAuthenticated) {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen
                        name="LoginPage"
                        options={{ title: 'Page de connexion' }}
                    >
                        {(props) => (
                            <LoginPage
                                {...props}
                                email={email}
                                setEmail={setEmail}
                                password={password}
                                setPassword={setPassword}
                            />
                        )}
                    </Tab.Screen>
                    <Tab.Screen
                        name="RegisterPage"
                        options={{ title: 'Page d\'inscription' }}
                    >
                        {(props) => (
                            <RegisterPage
                                {...props}
                                email={email}
                                setEmail={setEmail}
                                password={password}
                                setPassword={setPassword}
                            />
                        )}
                    </Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="EvenementPage"
                    component={EvenementPage}
                    options={{ title: 'Evènement page' }}
                />
                <Tab.Screen
                    name="LogoutPage"
                    component={() => null}
                    options={{
                        title: 'Déconnexion',
                        tabBarButton: (props) => <LogoutButton {...props} />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}