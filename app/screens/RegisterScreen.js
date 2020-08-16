import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import CheckBox from "react-native-check-box";
import * as Yup from "yup";

import Screen from "../components/Screen";
import Text from "../components/Text";
import Button from "../components/Button";
import ErrorMessage from "../components/forms/ErrorMessage";
import { Form, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const CheckBoxComponent = () => {
    return (
      <View onClick={() => setAcceptedTerms(!acceptedTerms)}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            name="terms"
            isChecked={acceptedTerms}
            onClick={() => setAcceptedTerms(!acceptedTerms)}
            style={styles.checkbox}
          />
          <Text>
            I have read and agree to the Terms{!acceptedTerms ? "👎" : "👍"}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Form
        initialValues={{ name: "", email: "", password: "", terms: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Full Name"
        />
        <FormField
          autoCorrect={false}
          icon="mail-ru"
          name="username"
          placeholder="Username"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <CheckBoxComponent name="terms" />
        <ErrorMessage
          error="You should agree to Faceless terms"
          visible={!acceptedTerms}
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default RegisterScreen;