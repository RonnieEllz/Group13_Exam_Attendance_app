import React from 'react';
import Scanner from './app/App';
import Home from './app/components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';  

const Stack = createStackNavigator(); 
function App() {
    return (
        <Stack.Navigator>  
            <Stack.Screen name="Home" component={Home} />  
            <Stack.Screen name="Scanner" component={Scanner} />
        </Stack.Navigator>
    );
}

export default () => {
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>
    );
};
