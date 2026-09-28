import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Logo from "./components/Logo";
export default function App() {
  const [fullname, setFullname] = useState("Aparna");
  return (
    <View>
    <Logo/>
      <Text>Hello, World {fullname}</Text>
      <TextInput
        placeholder="enter your name"
        onChangeText={(value) => setFullname(value)}
      ></TextInput>
    </View>
    
  );
}