import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Logo from "./components/Logo";
export default function App() {
  const [fullname, setFullname] = useState("Katarzyna Dzhumal");
     const [fname, setFname] = useState("Kasia");
    const [lname, setLname] = useState("Dzhumal");
    const [dob, setDob] = useState("30 September 2005");
  return (
    <View>
    <Logo/>
 
      <Text>Hello, World {fullname}</Text>
      <TextInput
        placeholder="enter your name"
        onChangeText={(value) => setFullname(value)}/>
      
      <TextInput placeholder="Enter your firstname" onChangeText={setFname}/>
      <TextInput placeholder="Enter your lastname" onChangeText={setLname}/>
      <TextInput placeholder="Enter your date of birth" onChangeText={setDob}/>

      <Text>Hello {fname} {lname}. You were born on {dob}</Text>
      >
    </View>
    
  );
}