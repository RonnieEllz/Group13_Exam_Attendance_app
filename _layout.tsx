import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
};

export default Layout;
