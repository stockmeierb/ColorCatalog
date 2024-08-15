import React, {useState} from "react";
import { StyleSheet, FlatList } from "react-native";
import ColorButton from "./components/ColorButton";
// import defaultColors from "./data/defaultColors.json" 
import ColorForm from "./components/ColorForm";
import { useColors } from "./hooks";

// const { height, width } = Dimensions.get('window');

export default function App() {
// const onButtonPress = () => {
//   console.log(`${new Date().toLocaleTimeString()} button press`);
//   Alert.alert(`${new Date().toLocaleTimeString()} button press`);
// }

  const [backgroundColor, setBackgroundColor] = useState("blue");
  const { colors, addColor} = useColors();
  return (
    <>
    <ColorForm 
    onNewColor={addColor}
    />
    <FlatList style={[styles.container, { backgroundColor }]}
      data={colors}
      renderItem={({ item }) => {
        return (
          <ColorButton key={item.id} backgroundColor={item.color} onPress={setBackgroundColor} />
        );
      } } /></>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  }
})

{/* <Text style={styles.button} onPress={() => setBackgroundColor("green")} >green</Text> */}
{/* <Text style={styles.button} onPress={() => setBackgroundColor("red")} >red</Text> */}

  {/* <ActivityIndicator size="large" color={"#61DBFB"} /> */}
  {/* <Button title="click me"  onPress={onButtonPress} onButtonPress /> */}
{/* <Text>OS: {Platform.OS}</Text> */}
{/* <Text>Height: {height}</Text> */}
{/* <Text>Width: {width}</Text> */}
{/* <Text>Snack.expo.dev</Text> */}