import React from "react";
import { ActivityIndicator, Text, View, Button, Alert, Dimensions, Platform, StyleSheet } from "react-native";

const { height, width } = Dimensions.get('window');

export default function App() {
const onButtonPress = () => {
  console.log(`${new Date().toLocaleTimeString()} button press`);
  Alert.alert(`${new Date().toLocaleTimeString()} button press`);
}
  return (
    <View style={styles.page}>
    <Text style={styles.text} >red</Text>
    <Text style={[styles.text, styles.selectedText]} >green</Text>
    <Text style={styles.text} >blue</Text>
    
      <ActivityIndicator size="large" color={"#61DBFB"} />
      <Button title="click me"  onPress={onButtonPress} onButtonPress />
    <Text>OS: {Platform.OS}</Text>
    <Text>Height: {height}</Text>
    <Text>Width: {width}</Text>
    <Text>Snack.expo.dev</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    marginTop: 40,
    backgroundColor: "#DDD",
  },
  text: {
    fontsize: 22,
    color: "red",
    backgroundColor: "yellow",
    margin: 10,
    padding: 5
  },
  selectedText: {
    backgroundColor: "red",
    color: "yellow",
  }
})