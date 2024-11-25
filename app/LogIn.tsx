import { router, useRouter } from "expo-router";
import * as React from "react";
import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import tw from "twrnc";
 import {loginWithEmailAndPassword} from "./authservice";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle Login with Firebase Authentication
  const handleLogin = async () => {
  try {
    const userCredential = await loginWithEmailAndPassword(email, password);
    //console.log('User logged in: ', userCredential.user.email); // Show alert instead of console.log
    setError(''); // Clear any previous errors
     // Navigate to Home screen
     router.push("/Home");
  } catch (error) {
    if (error instanceof Error) {
      console.log('Login Error: ', error.message);  // Show error message in an alert
    } else {
      console.log('An unknown error occurred.');
    }
  }
};

  return (
    <View style={tw`bg-gray items-center pt-20`}>
      <Image
        source={require("./home/assets/images/logo.png")}
        style={tw`w-25 h-25 mb-5`}
      />
      <Text style={tw`text-2xl font-bold `}>LOG IN</Text>

      <View style={tw`bg-gray-200 p-22 rounded-lg `}>
        <Text style={tw`text font-bold`}>Email</Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          style={tw`"w-5/5 p-3 rounded-lg bg-white mb-5`}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={tw`font-bold`}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={tw`"w-5/5  p-3 rounded-lg bg-white mb-5`}
          secureTextEntry
        />

       
          <TouchableOpacity style={tw`bg-black p-3 pl-15 pr-15 rounded-md`}>
            <Text onPress = {handleLogin} style={tw`text-white text-x2 font-bold text-center`}>
              continue
            </Text>
          </TouchableOpacity>
       
      </View>
    </View>
  );
};

export default Login;
