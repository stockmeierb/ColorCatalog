import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import ColorButton from "./components/ColorButton";

// const { height, width } = Dimensions.get('window');

export default function App() {
// const onButtonPress = () => {
//   console.log(`${new Date().toLocaleTimeString()} button press`);
//   Alert.alert(`${new Date().toLocaleTimeString()} button press`);
// }

  const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    
    <View style={[styles.container, { backgroundColor }]}>
      <ColorButton backgroundColor="red" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="green" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="blue" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="yellow" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="purple" onPress={setBackgroundColor}/>
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
  }
})