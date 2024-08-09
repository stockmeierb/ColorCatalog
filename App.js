import React, {useState} from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
// import { ActivityIndicator, Text, View, Button, Alert, Dimensions, Platform, StyleSheet } from "react-native";

// const { height, width } = Dimensions.get('window');

export default function App() {
// const onButtonPress = () => {
//   console.log(`${new Date().toLocaleTimeString()} button press`);
//   Alert.alert(`${new Date().toLocaleTimeString()} button press`);
// }

  const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableHighlight 
      style={styles.button}
      onPress={() => setBackgroundColor("yellow")}
        underlayColor="orange"
        >
        
        <View style={styles.row}>
          <View style={[styles.sample, { backgroundColor: "yellow" }]} />
          <Text style={styles.buttonText}>yellow</Text>
        </View>

      </TouchableHighlight>
    {/* <Text style={styles.button} onPress={() => setBackgroundColor("green")} >green</Text> */}
    {/* <Text style={styles.button} onPress={() => setBackgroundColor("red")} >red</Text> */}
    
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
    alignSelf: "stretch",
    textAlign:"center",
    padding: 5,
    backgroundColor: "rgba(255,255,255, .8)"
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  sample: {
    height:20,
    width:20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white"
  },
  selectedText: {
    backgroundColor: "red",
    color: "yellow",
  }
})