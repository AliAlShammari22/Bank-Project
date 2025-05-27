// Profile.tsx
import { me } from "@/api/auth";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Profile() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: me,
  });

  //   console.log(data);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load profile.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://react-bank-project.eapi.joincoded.com/${data?.image}`,
        }}
        style={styles.avatar}
      />
      <Text style={styles.username}>{data?.username}</Text>
      {/* Uncomment if you have a balance field */}
      <Text style={styles.balance}>Balance: ${data.balance.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    color: "#D00",
    fontSize: 16,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#007AFF",
  },
  username: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 8,
  },
  balance: {
    fontSize: 18,
    color: "#555",
    marginTop: 4,
  },
});
