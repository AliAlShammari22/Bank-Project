import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Welcome = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: "lightblue" }}>
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity
          onPress={() => router.push("/Login")}
          style={styles.login}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          width: "auto",
          alignItems: "center",
          marginHorizontal: 30,
        }}
      >
        <Text style={styles.welcometext}>
          Welcome to your New Banking Experience
        </Text>
        <Text style={styles.text}>
          Our mobile app empowers you to manage your finances effortlessly.
          Enjoy features like instant deposits, transaction tracking, and
          personalized profile updates.
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            // onPress={() => router.push("/Register")}
            style={styles.blackButton}
          >
            <Text style={{ color: "white" }}>Learn More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/Register")}
            style={styles.register}
          >
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  welcometext: {
    fontSize: 43,
    fontWeight: "bold",
    // width: "100%",
    // paddingLeft: 30,
    // paddingRight: 30,
  },
  text: {
    marginVertical: 30,
  },
  blackButton: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 15,
    margin: 10,
    marginBottom: 100,
    backgroundColor: "black",
  },
  register: {
    borderWidth: 2.5,
    borderRadius: 4,
    padding: 15,
    margin: 10,
    marginBottom: 100,
  },
  login: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    width: 100,
    alignItems: "center",
    marginRight: 10,
    marginBottom: 90,
    backgroundColor: "black",
  },
});
