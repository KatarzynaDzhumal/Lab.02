import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import Logo from "./components/Logo";

export default function App() {
  const [fullname, setFullname] = useState("Katarzyna Dzhumal");
  const [fname, setFname] = useState("Kasia");
  const [lname, setLname] = useState("Dzhumal");
  const [dob, setDob] = useState("30 September 2005");

  function buttonClicked() {
    alert(`First Name: ${fname}
Last Name: ${lname}
Date of Birth: ${dob}`);
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
