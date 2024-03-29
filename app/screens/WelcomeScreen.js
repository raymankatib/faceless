import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

import Button from "../components/Button";
import Text from "../components/Text";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    // <ImageBackground
    //   blurRadius={10}
    //   style={styles.background}
    //   source={require("../assets/background.jpg")}
    // >
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>faceless</Text>
        <Text style={styles.slogan}> Say it as you feel it</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.main,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 150,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 60,
    fontWeight: "600",
    paddingTop: 15,
    color: colors.primary,
  },
  slogan: {
    fontSize: 20,
    fontWeight: "600",
    // paddingVertical: 20,
    color: colors.primary,
  },
});

export default WelcomeScreen;
