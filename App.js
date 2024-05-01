import React from "react";
import { ActivityIndicator, Text, View, Button, Alert, Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get('window');

export default function App() {
const onButtonPress = () => {
  console.log(`${new Date().toLocaleTimeString()} button press`);
  Alert.alert(`${new Date().toLocaleTimeString()} button press`);
}
  return (
    <View style={{padding: 50}}>
      {/* <ProgressViewIOS progress={0.5} /> */}
      <ActivityIndicator size="large" color={"#61DBFB"} />
      <Button title="click me"  onPress={onButtonPress} onButtonPress />
    <Text>Hello World</Text>
    
    <Text>OS: {Platform.OS}</Text>
    <Text>Height: {height}</Text>
    <Text>Width: {width}</Text>
    <Text>Snack.expo.dev</Text>
    </View>
  );
}