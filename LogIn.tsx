import React, { useState } from "react";
import { TextInput, View, Text, Button, StyleSheet, Alert } from "react-native";
import { loginWithEmailAndPassword } from "./firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const user = await loginWithEmailAndPassword(email, password);
      Alert.alert("Success", `Logged in as ${user.email}`);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 16, marginBottom: 8 },
  input: { borderWidth: 1, borderColor: "#ccc", marginBottom: 12, padding: 8, borderRadius: 4 },
  error: { color: "red", marginBottom: 12 },
});

export default Login;
