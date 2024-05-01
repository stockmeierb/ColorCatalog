import React from "react";
import { ActivityIndicator, Text, View, Button, Alert } from "react-native";

export default function App() {
const onButtonPress = () => {
  console.log(`${new Date().toLocaleTimeString()} button press`);
  Alert.alert(`${new Date().toLocaleTimeString()} button press`);
  return (
    <View style={{padding: 50}}>
      {/* <ProgressViewIOS progress={0.5} /> */}
      <ActivityIndicator size="large" color={"#61DBFB"} />
      <Button title="click me"  onPress={onButtonPress} onButtonPress />
    <Text>Hello World</Text>
    <Text>Red</Text>
    <Text>Green</Text>
    <Text>Blue</Text>
    </View>
  );
}