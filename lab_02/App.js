import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import Logo from "./components/Logo";

export default function App() {
  const [fullname, setFullname] = useState("Katarzyna Dzhumal");
  const [fname, setFname] = useState("Kasia");
  const [lname, setLname] = useState("Dzhumal");
  const [dob, setDob] = useState("30 September 2005");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function isValidEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  function buttonClicked() {
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setEmailError("");

    alert(
      "Hello " +
        fname +
        " " +
        lname +
        ". Your Date of birth is " +
        dob +
        ". Email: " +
        email
    );
  }

  return (
    <View style={styles.container}>
      <Logo />

      <Text style={styles.text}>Hello, World {fullname}</Text>

      <TextInput
        style={styles.input}
        placeholder="enter your name"
        onChangeText={(value) => setFullname(value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your firstname"
        onChangeText={setFname}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your lastname"
        onChangeText={setLname}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your date of birth"
        onChangeText={setDob}
      />

      <TextInput
        placeholder="Enter your email"
        onChangeText={setEmail}
        style={styles.input}
      />

      {emailError ? (
        <Text style={{ color: "red" }}>{emailError}</Text>
      ) : null}

      <Button title="SUBMIT" onPress={buttonClicked} />

      <Text style={styles.text}>
        Hello {fname} {lname}. You were born on {dob}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
  },

  text: {
    fontSize: 16,
    marginVertical: 10,
  },
});

