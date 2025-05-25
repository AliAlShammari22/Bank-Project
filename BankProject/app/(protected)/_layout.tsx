import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const ProtectedLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ProtectedLayout;

const styles = StyleSheet.create({});
