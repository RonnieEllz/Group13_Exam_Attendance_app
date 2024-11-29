import { router } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import tw from "twrnc";
import { loginWithEmailAndPassword } from "./authservice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }

    setError(""); 
    setLoading(true);
    try {
      const userCredential = await loginWithEmailAndPassword(email, password);
      setLoading(false); 
      router.push("/Home"); 
      setLoading(false); 
      setError(err.message || "An unknown error occurred."); 
    }
  };

  return (
    <ScrollView contentContainerStyle={tw`flex-1 justify-center items-center bg-gray`}>
      <Image
        source={require("../components/images/logo.png")}
        style={tw`w-25 h-25 mb-5`}
      />
      <Text style={tw`text-2xl font-bold mb-5`}>LOG IN</Text>

      <View style={tw`bg-gray-200 p-5 rounded-lg w-4/5`}>
        <Text style={tw`font-bold mb-2`}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={tw`w-full p-3 rounded-lg bg-white mb-5`}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Enter your email"
        />

       
        <Text style={tw`font-bold mb-2`}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={tw`w-full p-3 rounded-lg bg-white mb-5`}
          secureTextEntry
          placeholder="Enter your password"
        />

      
        {error ? <Text style={tw`text-red-500 text-center mb-5`}>{error}</Text> : null}

   
        <TouchableOpacity
          style={tw`bg-black p-3 rounded-full flex-row justify-center items-center`}
          onPress={handleLogin}
          disabled={loading} 
        >
          {loading ? (
            <ActivityIndicator color="white" size="small" />
          ) : (
            <Text style={tw`text-white text-lg font-bold text-center`}>Continue</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
