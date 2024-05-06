import React, {useState} from "react";
// import { ActivityIndicator, Text, View, Button, Alert, Dimensions, Platform, StyleSheet } from "react-native";
import { Text, View, StyleSheet } from "react-native";

const { height, width } = Dimensions.get('window');

export default function App() {
// const onButtonPress = () => {
//   console.log(`${new Date().toLocaleTimeString()} button press`);
//   Alert.alert(`${new Date().toLocaleTimeString()} button press`);
// }

  const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    <View style={[styles.container, { backgroundColor }]} >
    <Text style={styles.button} onPress={() => setBackgroundColor("green")} >green</Text>
    <Text style={styles.button} onPress={() => setBackgroundColor("red")} >red</Text>
    
      {/* <ActivityIndicator size="large" color={"#61DBFB"} /> */}
      {/* <Button title="click me"  onPress={onButtonPress} onButtonPress /> */}
    {/* <Text>OS: {Platform.OS}</Text> */}
    {/* <Text>Height: {height}</Text> */}
    {/* <Text>Width: {width}</Text> */}
    {/* <Text>Snack.expo.dev</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    textAlign:"center",
    padding: 5,
  },
  selectedText: {
    backgroundColor: "red",
    color: "yellow",
  }
})