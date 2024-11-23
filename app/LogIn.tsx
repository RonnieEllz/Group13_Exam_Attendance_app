import * as React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert} from "react-native";
import tw  from "twrnc";
// import {loginWithEmailAndPassword} from "./Backend Login-Auth/authservice";


const Login= () => {
    const [email,setEmail] = useState(' ');
    const [password, setPassword]=  useState(' ');
    const [error, setError] = useState('');
    
 // Handle Login with Firebase Authentication
 /*const handleLogin = async () => {
  try {
    const userCredential = await loginWithEmailAndPassword(email, password);
    alert('User logged in: ' + userCredential.user.email); // Show alert instead of console.log
    setError(''); // Clear any previous errors
    // Example: navigation.navigate('HomeScreen');
  } catch (error) {
    if (error instanceof Error) {
      alert('Login Error: ' + error.message);  // Show error message in an alert
    } else {
      alert('An unknown error occurred.');
    }
  }
};*/

return(
    <View style={tw`flex-1 justify-center items-center  bg-gray-200 w-1/4`}> 
    <Text>testing </Text>
    
    <Text style={tw`text-2xl font-bold mb-10`}>LOG IN</Text>

    <View style={tw` mt-3 p-4 shadow  bg-gray-100 rounded-lg w-4/5`} >
    <Text style={tw`text font-bold`}>Email</Text>

    <TextInput value={email} onChangeText={setEmail} style={tw`"w-5/5 p-3 rounded-lg bg-white mb-5`} keyboardType="email-address" autoCapitalize="none"/>

     <Text style={tw`font-bold`}>Password</Text>
    <TextInput value={password}  onChangeText={setPassword} style={tw`"w-5/5  p-3 rounded-lg bg-white mb-5`} secureTextEntry/>

    <View style = {tw`items-center justify-center mt-4`}>
    <TouchableOpacity  style={tw`bg-black p-3 rounded-lg w-3/5 items-center h-10` }>
    <Text style={tw`text-white items-center font-bold mb-7`}> Continue </Text>       
    </TouchableOpacity>

        <TouchableOpacity>
            <Text style={tw`underline text-black`}>create account</Text>
        </TouchableOpacity>
        </View>

    </View>
    
    </View>
);
};

export default Login;
